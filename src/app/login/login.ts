import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnInit, OnDestroy, PLATFORM_ID, inject, ChangeDetectionStrategy, signal, ViewChild, ElementRef } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../core/auth/services/auth.service';
import { ApiErrorResponse } from '../core/auth/models/auth.model';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

declare const google:
  | {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential?: string }) => void;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: { theme: string; size: string; width: number }
          ) => void;
        };
      };
    }
  | undefined;

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class Login implements OnInit, AfterViewInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);
  private readonly platformId = inject(PLATFORM_ID);

  signUpForm!: FormGroup;
  isRegistered = true;
  errorMsg = '';
  isSubmitting = false;
  readonly mx = signal('50%');
  readonly my = signal('50%');
  readonly panelTransform = signal('');
  readonly showPassword = signal(false);
  private animationFrameId: number | null = null;
  private resizeHandler: (() => void) | null = null;
  @ViewChild('particleCanvas', { static: false }) particleCanvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.resolveReturnUrl()]);
      return;
    }
    this.createForm();
  }

  ngAfterViewInit(): void {
    this.initGoogleButton();
    this.initParticles();
  }

  onPointerMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    this.mx.set(`${x}%`);
    this.my.set(`${y}%`);
    const rotateY = ((x - 50) / 50) * 1.1;
    const rotateX = ((50 - y) / 50) * 1.1;
    this.panelTransform.set(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  onPointerLeave(): void {
    this.mx.set('50%');
    this.my.set('50%');
    this.panelTransform.set('');
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(v => !v);
  }

  /**
   * Where to send the user after a successful auth.
   *
   * Prefers a `?returnUrl=` query param (set by `authGuard` when a deep
   * link was hit unauthenticated); otherwise defaults to the Xora
   * dashboard. Strips leading slashes defensively so a crafted
   * `?returnUrl=//evil.com` cannot perform an open redirect.
   */
  private resolveReturnUrl(): string {
    const raw = this.route.snapshot.queryParamMap.get('returnUrl');
    if (!raw) {
      return '/xora';
    }
    const safe = raw.replace(/^\/+/, '/');
    return safe.startsWith('/') ? safe : '/xora';
  }

  private initGoogleButton(retryCount = 0): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (typeof google === 'undefined') {
      if (retryCount < 10) {
        window.setTimeout(() => this.initGoogleButton(retryCount + 1), 300);
      }
      return;
    }

    const googleButton = document.getElementById('google-button');
    if (!googleButton) {
      return;
    }

    google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: (response) => this.handleGoogleLogin(response),
    });

    google.accounts.id.renderButton(googleButton, {
      theme: 'outline',
      size: 'large',
      width: 400,
    });
  }

  toggleMode(): void {
    this.isRegistered = !this.isRegistered;
    this.errorMsg = '';
    this.createForm();
  }

  createForm(): void {
    if (this.isRegistered) {
      this.signUpForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      });
    } else {
      this.signUpForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        reEnterPassword: ['', Validators.required],
      });
    }
  }

  loginValidation(): void {
    this.errorMsg = '';
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    if (this.isRegistered) {
      this.authService
        .login({
          email: this.signUpForm.get('email')?.value,
          password: this.signUpForm.get('password')?.value,
        })
        .subscribe({
          next: () => {
            this.isSubmitting = false;
            this.router.navigate([this.resolveReturnUrl()]);
          },
          error: (err) => this.handleAuthError(err),
        });
      return;
    }

    if (!this.matchPassword()) {
      this.errorMsg = 'Passwords do not match';
      this.isSubmitting = false;
      return;
    }

    const firstName = this.signUpForm.get('firstName')?.value?.trim();
    const lastName = this.signUpForm.get('lastName')?.value?.trim();

    this.authService
      .register({
        email: this.signUpForm.get('email')?.value,
        password: this.signUpForm.get('password')?.value,
        displayName: `${firstName} ${lastName}`.trim(),
      })
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.router.navigate([this.resolveReturnUrl()]);
        },
        error: (err) => this.handleAuthError(err),
      });
  }

  private matchPassword(): boolean {
    return (
      this.signUpForm.get('password')?.value ===
      this.signUpForm.get('reEnterPassword')?.value
    );
  }

  private handleGoogleLogin(response: { credential?: string }): void {
    this.errorMsg = '';
    if (!response.credential) {
      this.errorMsg = 'Google sign-in failed. Please try again.';
      return;
    }

    this.isSubmitting = true;
    this.authService.googleLogin({ credential: response.credential }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate([this.resolveReturnUrl()]);
      },
      error: (err) => this.handleAuthError(err),
    });
  }

  private handleAuthError(err: HttpErrorResponse): void {
    this.isSubmitting = false;
    const apiError = err.error as ApiErrorResponse | undefined;
    this.errorMsg = apiError?.message ?? 'Authentication failed. Please try again.';
  }

  private initParticles(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const canvas = this.particleCanvas?.nativeElement;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const particles: Array<{
      x: number; y: number; size: number;
      speedX: number; speedY: number; opacity: number;
      pulse: number; pulseSpeed: number;
    }> = [];
    const count = 90;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    this.resizeHandler = resize;
    window.addEventListener('resize', resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.2,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.5 + 0.08,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;
        if (p.x < -5) { p.x = canvas.width + 5; }
        if (p.x > canvas.width + 5) { p.x = -5; }
        if (p.y < -5) { p.y = canvas.height + 5; }
        if (p.y > canvas.height + 5) { p.y = -5; }
        const o = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 191, ${o})`;
        ctx.fill();
      }
      this.animationFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }
}

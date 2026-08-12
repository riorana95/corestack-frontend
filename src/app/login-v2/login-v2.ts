import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../core/auth/services/auth.service';
import { ApiErrorResponse } from '../core/auth/models/auth.model';
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
            options: {
              theme: string;
              size: string;
              width: number;
              text?: string;
              shape?: string;
            },
          ) => void;
        };
      };
    }
  | undefined;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
  phase: number;
  depth: number;
};

@Component({
  selector: 'app-login-v2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-v2.html',
  styleUrl: './login-v2.scss',
})
export class LoginV2 implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas')
  private particleCanvas?: ElementRef<HTMLCanvasElement>;

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly auth = inject(AuthService);
  private readonly platformId = inject(PLATFORM_ID);

  /* =========================================================
     DESIGN STATE
  ========================================================= */

  loaded = false;
  showPassword = false;
  activeField = '';

  /* =========================================================
     PARALLAX
  ========================================================= */

  xTranslate = 0;
  yTranslate = 0;
  rotateX = 0;
  rotateY = 0;

  private parallaxFrame?: number;

  /* =========================================================
     PARTICLE ENGINE
  ========================================================= */

  private particleFrame?: number;
  private particles: Particle[] = [];
  private particleContext?: CanvasRenderingContext2D;
  private particleWidth = 0;
  private particleHeight = 0;
  private mouseX = -9999;
  private mouseY = -9999;
  private resizeHandler?: () => void;

  /* =========================================================
     AUTH STATE
  ========================================================= */

  loginForm!: FormGroup;
  isSignIn = true;
  errorMsg = '';
  submitting = false;

  /* =========================================================
     LIFECYCLE
  ========================================================= */

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate([this.returnUrl()]);
      return;
    }

    this.buildForm();

    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => {
        this.loaded = true;
      });
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.startParticleSystem();
    this.mountGoogle();
  }

  ngOnDestroy(): void {
    if (this.parallaxFrame) {
      cancelAnimationFrame(this.parallaxFrame);
    }

    if (this.particleFrame) {
      cancelAnimationFrame(this.particleFrame);
    }

    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  /* =========================================================
     MOUSE / PARALLAX
  ========================================================= */

  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    if (this.parallaxFrame) {
      cancelAnimationFrame(this.parallaxFrame);
    }

    this.parallaxFrame = requestAnimationFrame(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const normalizedX = (event.clientX / width - 0.5) * 2;
      const normalizedY = (event.clientY / height - 0.5) * 2;

      this.xTranslate = normalizedX * 14;
      this.yTranslate = normalizedY * 10;

      this.rotateY = normalizedX * 7;
      this.rotateX = -normalizedY * 5;
    });
  }

  resetMouse(): void {
    this.mouseX = -9999;
    this.mouseY = -9999;

    if (this.parallaxFrame) {
      cancelAnimationFrame(this.parallaxFrame);
    }

    this.parallaxFrame = requestAnimationFrame(() => {
      this.xTranslate = 0;
      this.yTranslate = 0;
      this.rotateX = 0;
      this.rotateY = 0;
    });
  }

  /* =========================================================
     UI
  ========================================================= */

  toggleMode(): void {
    this.isSignIn = !this.isSignIn;
    this.errorMsg = '';
    this.showPassword = false;
    this.activeField = '';

    this.buildForm();

    setTimeout(() => {
      this.mountGoogle();
    }, 100);
  }

  /* =========================================================
     FORM SUBMISSION
  ========================================================= */

  onSubmit(): void {
    this.errorMsg = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.submitting = true;

    if (this.isSignIn) {
      this.auth
        .login({
          email: this.loginForm.get('email')?.value,
          password: this.loginForm.get('password')?.value,
        })
        .subscribe({
          next: () => {
            this.submitting = false;
            this.router.navigate([this.returnUrl()]);
          },
          error: (err) => this.handleError(err),
        });

      return;
    }

    if (
      this.loginForm.get('password')?.value !==
      this.loginForm.get('confirmPassword')?.value
    ) {
      this.errorMsg = 'Passwords do not match';
      this.submitting = false;
      return;
    }

    const firstName =
      this.loginForm.get('firstName')?.value?.trim() ?? '';

    const lastName =
      this.loginForm.get('lastName')?.value?.trim() ?? '';

    this.auth
      .register({
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
        displayName: `${firstName} ${lastName}`.trim(),
      })
      .subscribe({
        next: () => {
          this.submitting = false;
          this.router.navigate([this.returnUrl()]);
        },
        error: (err) => this.handleError(err),
      });
  }

  /* =========================================================
     PARTICLE SYSTEM
  ========================================================= */

  private startParticleSystem(): void {
    const canvas = this.particleCanvas?.nativeElement;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    this.particleContext = context;

    this.resizeHandler = () => {
      this.resizeParticleCanvas();
    };

    window.addEventListener('resize', this.resizeHandler);

    this.resizeParticleCanvas();

    this.animateParticles();
  }

  private resizeParticleCanvas(): void {
    const canvas = this.particleCanvas?.nativeElement;

    if (!canvas || !this.particleContext) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.particleWidth = window.innerWidth;
    this.particleHeight = window.innerHeight;

    canvas.width = this.particleWidth * dpr;
    canvas.height = this.particleHeight * dpr;

    canvas.style.width = `${this.particleWidth}px`;
    canvas.style.height = `${this.particleHeight}px`;

    this.particleContext.setTransform(dpr, 0, 0, dpr, 0, 0);

    const particleCount = Math.max(
      45,
      Math.min(
        95,
        Math.floor(
          (this.particleWidth * this.particleHeight) / 26000,
        ),
      ),
    );

    this.particles = Array.from(
      { length: particleCount },
      () => this.createParticle(),
    );
  }

  private createParticle(): Particle {
    const depth = Math.random();

    return {
      x: Math.random() * this.particleWidth,
      y: Math.random() * this.particleHeight,
      vx: (Math.random() - 0.5) * (0.12 + depth * 0.28),
      vy: (Math.random() - 0.5) * (0.08 + depth * 0.2),
      size: 0.5 + depth * 1.9,
      alpha: 0.12 + depth * 0.62,
      twinkleSpeed: 0.0008 + Math.random() * 0.0025,
      phase: Math.random() * Math.PI * 2,
      depth,
    };
  }

  private animateParticles = (): void => {
    if (
      !this.particleContext ||
      !this.particleWidth ||
      !this.particleHeight
    ) {
      return;
    }

    const ctx = this.particleContext;

    ctx.clearRect(
      0,
      0,
      this.particleWidth,
      this.particleHeight,
    );

    const now = performance.now();

    for (const particle of this.particles) {
      const mouseDx = this.mouseX - particle.x;
      const mouseDy = this.mouseY - particle.y;
      const mouseDistance = Math.sqrt(
        mouseDx * mouseDx + mouseDy * mouseDy,
      );

      if (mouseDistance < 180) {
        const force = (180 - mouseDistance) / 180;

        particle.vx -= mouseDx * force * 0.000015 * particle.depth;
        particle.vy -= mouseDy * force * 0.000015 * particle.depth;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      particle.vx *= 0.997;
      particle.vy *= 0.997;

      if (Math.abs(particle.vx) < 0.02) {
        particle.vx += (Math.random() - 0.5) * 0.03;
      }

      if (Math.abs(particle.vy) < 0.02) {
        particle.vy += (Math.random() - 0.5) * 0.025;
      }

      if (particle.x < -10) particle.x = this.particleWidth + 10;
      if (particle.x > this.particleWidth + 10) particle.x = -10;
      if (particle.y < -10) particle.y = this.particleHeight + 10;
      if (particle.y > this.particleHeight + 10) particle.y = -10;

      const twinkle =
        Math.sin(
          now * particle.twinkleSpeed + particle.phase,
        ) * 0.22;

      const alpha = Math.max(
        0.05,
        Math.min(1, particle.alpha + twinkle),
      );

      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        particle.size,
        0,
        Math.PI * 2,
      );

      ctx.fillStyle = `rgba(129, 245, 255, ${alpha})`;
      ctx.fill();

      if (particle.depth > 0.68) {
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * 2.8,
          0,
          Math.PI * 2,
        );

        ctx.fillStyle = `rgba(37, 211, 225, ${
          alpha * 0.08
        })`;

        ctx.fill();
      }
    }

    this.drawParticleConnections(ctx);

    this.particleFrame =
      requestAnimationFrame(this.animateParticles);
  };

  private drawParticleConnections(
    ctx: CanvasRenderingContext2D,
  ): void {
    const maxDistance = 110;
    const maxParticles = Math.min(this.particles.length, 55);

    for (let i = 0; i < maxParticles; i++) {
      const a = this.particles[i];

      for (let j = i + 1; j < maxParticles; j++) {
        const b = this.particles[j];

        const dx = a.x - b.x;
        const dy = a.y - b.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity =
            (1 - distance / maxDistance) *
            0.06 *
            Math.min(a.depth, b.depth);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);

          ctx.strokeStyle = `rgba(73, 223, 235, ${opacity})`;
          ctx.lineWidth = 0.45;
          ctx.stroke();
        }
      }
    }
  }

  /* =========================================================
     FORM BUILDING
  ========================================================= */

  private buildForm(): void {
    if (this.isSignIn) {
      this.loginForm = this.fb.group({
        email: [
          '',
          [
            Validators.required,
            Validators.email,
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ],
        ],
      });

      return;
    }

    this.loginForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ],
      ],
      confirmPassword: ['', Validators.required],
    });
  }

  private returnUrl(): string {
    const raw =
      this.route.snapshot.queryParamMap.get(
        'returnUrl',
      );

    if (!raw) {
      return '/xora';
    }

    const safe = raw.replace(/^\/+/, '/');

    return safe.startsWith('/')
      ? safe
      : '/xora';
  }

  /* =========================================================
     GOOGLE AUTH
  ========================================================= */

  private mountGoogle(attempts = 0): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (typeof google === 'undefined') {
      if (attempts < 15) {
        window.setTimeout(
          () => this.mountGoogle(attempts + 1),
          300,
        );
      }

      return;
    }

    const element =
      document.getElementById('google-btn-v2');

    if (!element) {
      return;
    }

    element.innerHTML = '';

    google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: (response) =>
        this.onGoogleAuth(response),
    });

    google.accounts.id.renderButton(element, {
      theme: 'outline',
      size: 'large',
      width: 400,
      text: 'continue_with',
      shape: 'rectangular',
    });
  }

  private onGoogleAuth(
    response: { credential?: string },
  ): void {
    this.errorMsg = '';

    if (!response.credential) {
      this.errorMsg =
        'Google sign-in failed. Please try again.';
      return;
    }

    this.submitting = true;

    this.auth
      .googleLogin({
        credential: response.credential,
      })
      .subscribe({
        next: () => {
          this.submitting = false;
          this.router.navigate([
            this.returnUrl(),
          ]);
        },
        error: (err) => this.handleError(err),
      });
  }

  /* =========================================================
     ERROR
  ========================================================= */

  private handleError(
    error: HttpErrorResponse,
  ): void {
    this.submitting = false;

    const api =
      error.error as
        | ApiErrorResponse
        | undefined;

    this.errorMsg =
      api?.message ??
      'Authentication failed. Please try again.';
  }
}
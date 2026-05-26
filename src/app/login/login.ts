import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
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
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true,
})
export class Login implements OnInit, AfterViewInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly platformId = inject(PLATFORM_ID);

  signUpForm!: FormGroup;
  isRegistered = true;
  errorMsg = '';
  isSubmitting = false;

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
      return;
    }
    this.createForm();
  }

  ngAfterViewInit(): void {
    this.initGoogleButton();
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
      width: 250,
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
            this.router.navigate(['/home']);
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
          this.router.navigate(['/home']);
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
        this.router.navigate(['/home']);
      },
      error: (err) => this.handleAuthError(err),
    });
  }

  private handleAuthError(err: HttpErrorResponse): void {
    this.isSubmitting = false;
    const apiError = err.error as ApiErrorResponse | undefined;
    this.errorMsg = apiError?.message ?? 'Authentication failed. Please try again.';
  }
}

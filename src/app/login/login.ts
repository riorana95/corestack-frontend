import { Component, OnInit, inject } from '@angular/core';
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

declare const google: { accounts: { id: unknown } } | undefined;

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true,
})
export class Login implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

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
    this.initGoogleButton();
  }

  private initGoogleButton(): void {
    if (typeof google === 'undefined') {
      return;
    }
    // Google OAuth wiring comes in a later phase; backend provider table is ready.
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

  private handleAuthError(err: HttpErrorResponse): void {
    this.isSubmitting = false;
    const apiError = err.error as ApiErrorResponse | undefined;
    this.errorMsg = apiError?.message ?? 'Authentication failed. Please try again.';
  }
}

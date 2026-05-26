import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  AuthResponse,
  GoogleLoginRequest,
  LoginRequest,
  RegisterRequest,
  User,
} from '../models/auth.model';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private routes = inject(Router);
  private readonly tokenStorage = inject(TokenStorageService);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/auth`;

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/register`, request)
      .pipe(tap((response) => this.persistSession(response)));
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/login`, request)
      .pipe(tap((response) => this.persistSession(response)));
  }

  googleLogin(request: GoogleLoginRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/google`, request)
      .pipe(tap((response) => this.persistSession(response)));
  }

  refresh(): Observable<AuthResponse> {
    const refreshToken = this.tokenStorage.getRefreshToken();
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/refresh`, { refreshToken })
      .pipe(tap((response) => this.persistSession(response)));
  }

  me(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/me`);
  }

  logout(): void {
    this.tokenStorage.clearSession();
    this.routes.navigate([''])
  }

  isAuthenticated(): boolean {
    return this.tokenStorage.isLoggedIn();
  }

  getCurrentUser(): User | null {
    return this.tokenStorage.getUser();
  }

  private persistSession(response: AuthResponse): void {
    this.tokenStorage.saveSession(
      response.accessToken,
      response.refreshToken,
      response.user
    );
  }
}

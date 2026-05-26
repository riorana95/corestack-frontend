import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { User } from '../models/auth.model';

const ACCESS_TOKEN_KEY = 'sw_access_token';
const REFRESH_TOKEN_KEY = 'sw_refresh_token';
const USER_KEY = 'sw_user';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  private readonly platformId = inject(PLATFORM_ID);

  getAccessToken(): string | null {
    if (!this.isBrowser()) {
      return null;
    }
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    if (!this.isBrowser()) {
      return null;
    }
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  getUser(): User | null {
    if (!this.isBrowser()) {
      return null;
    }
    const raw = localStorage.getItem(USER_KEY);
    try {
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  }

  saveSession(accessToken: string, refreshToken: string, user: User): void {
    if (!this.isBrowser()) {
      return;
    }
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  clearSession(): void {
    if (!this.isBrowser()) {
      return;
    }
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}

import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

/**
 * Decoded JWT payload — only the fields we care about.
 * The `exp` claim is a Unix timestamp in seconds.
 */
interface JwtPayload {
  exp?: number;
}

/**
 * Returns true if the access token's `exp` claim is still in the future.
 * Returns false if the token is expired, malformed, or has no `exp`.
 *
 * Note: this does NOT validate the signature — it only checks the
 * expiry claim. The backend is still the source of truth for auth;
 * this is purely a client-side UX optimization to avoid the
 * "load /corestack → 401 → logout → land on portfolio" loop that
 * otherwise happens when a stale token lingers in localStorage.
 */
function isTokenStillValid(token: string): boolean {
  try {
    const payload = jwtDecode<JwtPayload>(token);
    if (typeof payload.exp !== 'number') {
      // No exp claim — assume valid and let the backend decide.
      return true;
    }
    // 30-second skew buffer so we don't cut it too close
    const now = Math.floor(Date.now() / 1000);
    return payload.exp > now + 30;
  } catch {
    return false;
  }
}

/**
 * Guards every `/corestack/*` route (except `/corestack/login`).
 *
 * Behaviour:
 * 1. No token at all → redirect to `/corestack/login` with `returnUrl`.
 * 2. Token present but expired (per JWT `exp` claim) → proactively
 *    clear the stale session and redirect to login. This prevents the
 *    "lands on portfolio" loop where a stale token passes the guard,
 *    the first API call 401s, and `authInterceptor.logout()` bounces
 *    the user back to `/`.
 * 3. Token present and valid → allow.
 *
 * The `returnUrl` query param preserves the original target URL so
 * the login flow can send the user straight back after auth.
 */
export const authGuard: CanActivateFn = (_route, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const tokenStorage = inject(TokenStorageService);
  const router = inject(Router);

  // Not authenticated at all — send to login.
  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['/corestack/login'], {
      queryParams: { returnUrl: state.url },
    });
  }

  // Has a token, but is it still valid per its own exp claim?
  const accessToken = tokenStorage.getAccessToken();
  if (accessToken && !isTokenStillValid(accessToken)) {
    // Stale token — clear it now so the user gets a clean login
    // flow instead of a flash of the dashboard followed by a 401
    // bounce back to the portfolio.
    tokenStorage.clearSession();
    return router.createUrlTree(['/corestack/login'], {
      queryParams: { returnUrl: state.url },
    });
  }

  return true;
};

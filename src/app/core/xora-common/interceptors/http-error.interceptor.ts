import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../auth/services/token-storage.service';

/**
 * Global HTTP error interceptor.
 *
 * Catches every non-2xx response from the backend, parses the
 * {@link ApiErrorResponse} envelope, shows a user-facing toast, and — for
 * terminal auth failures (refresh failed) — clears the session and routes
 * to /xora/login.
 *
 * Lives in `xora-common` so every future product (Interview Prep, Split
 * Vise, Ecommerce) gets the same UX for free.
 */
export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);
  const router = inject(Router);
  const tokenStorage = inject(TokenStorageService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const isAuthEndpoint = req.url.includes('/api/v1/auth/');

      if (error.status === 0) {
        if (!isAuthEndpoint) {
          toast.error('Cannot reach the Xora server. Please check your connection.');
        }
      } else if (error.status === 401) {
        if (!isAuthEndpoint && tokenStorage.isLoggedIn()) {
          tokenStorage.clearSession();
          toast.warning('Your session has expired. Please sign in again.');
          router.navigate(['/xora/login'], {
            queryParams: { returnUrl: router.url },
          });
        }
      } else if (error.status === 403) {
        toast.error('You do not have permission to perform this action.');
      } else if (error.status === 404) {
        const msg = extractMessage(error) ?? 'The resource you requested was not found.';
        toast.warning(msg);
      } else if (error.status === 422 || error.status === 400) {
        const msg = extractMessage(error) ?? 'The request was invalid.';
        toast.error(msg);
      } else if (error.status >= 500) {
        const msg = extractMessage(error) ?? 'Something went wrong on our end. Please try again.';
        toast.error(msg);
      } else {
        const msg = extractMessage(error) ?? 'An unexpected error occurred.';
        toast.error(msg);
      }

      return throwError(() => error);
    })
  );
};

/**
 * Pulls the `message` field out of the backend's ApiErrorResponse envelope,
 * falling back to the raw error message if the body shape is unexpected.
 */
function extractMessage(error: HttpErrorResponse): string | null {
  const body = error.error;
  if (body && typeof body === 'object' && 'message' in body) {
    const msg = (body as { message: unknown }).message;
    if (typeof msg === 'string' && msg.length > 0) {
      return msg;
    }
  }
  return null;
}

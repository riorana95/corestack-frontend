import { ErrorHandler, Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastService } from '../services/toast.service';

/**
 * Global Angular error handler — catches uncaught exceptions thrown inside
 * the Angular zone (template errors, signal errors, etc.) that never reach
 * an HTTP interceptor.
 *
 * In dev we still log to console for stack traces; in prod we surface a
 * generic toast so the user knows something went wrong instead of the UI
 * silently failing.
 */
@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {
  private readonly toast = inject(ToastService);
  private readonly platformId = inject(PLATFORM_ID);

  handleError(error: unknown): void {
    console.error('[Xora] Unhandled error:', error);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const msg = extractUserMessage(error);
    if (msg) {
      this.toast.error(msg);
    }
  }
}

function extractUserMessage(error: unknown): string | null {
  if (error instanceof Error) {
    if (error.message.includes('ExpressionChangedAfterItHasBeenChecked')) {
      return null;
    }
    return 'Something went wrong. Please reload the page if the UI looks broken.';
  }
  return 'An unexpected error occurred.';
}

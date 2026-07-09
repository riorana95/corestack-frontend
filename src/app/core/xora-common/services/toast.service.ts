import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Severity levels understood by the toast UI.
 */
export type ToastSeverity = 'success' | 'error' | 'warning' | 'info';

export interface ToastOptions {
  /** How long the toast stays visible (ms). 0 = sticky. Default: 5000. */
  duration?: number;
  /** When true, the user cannot dismiss the toast manually. */
  sticky?: boolean;
}

interface ActiveToast {
  id: number;
  severity: ToastSeverity;
  message: string;
  sticky: boolean;
  createdAt: number;
}

/**
 * Lightweight, dependency-free toast service. Renders to a fixed overlay
 * mounted at the root component (see ToastHost component).
 *
 * Why not Angular Material Snackbar? Snackbar pulls in ~30KB of Material
 * + animations + layout modules, and the global-loader already shows we
 * prefer a hand-rolled minimalist UI. This keeps the bundle lean and
 * gives us full control of the toast's look-and-feel.
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly toasts: ActiveToast[] = [];
  private nextId = 1;

  /** Synchronous list of active toasts — components can render this directly. */
  get active(): ReadonlyArray<ActiveToast> {
    return this.toasts;
  }

  success(message: string, opts?: ToastOptions): void {
    this.show('success', message, opts);
  }

  error(message: string, opts?: ToastOptions): void {
    this.show('error', message, { duration: 8000, ...opts });
  }

  warning(message: string, opts?: ToastOptions): void {
    this.show('warning', message, opts);
  }

  info(message: string, opts?: ToastOptions): void {
    this.show('info', message, opts);
  }

  dismiss(id: number): void {
    const idx = this.toasts.findIndex((t) => t.id === id);
    if (idx >= 0) {
      this.toasts.splice(idx, 1);
    }
  }

  clear(): void {
    this.toasts.length = 0;
  }

  private show(severity: ToastSeverity, message: string, opts?: ToastOptions): void {
    if (!isPlatformBrowser(this.platformId)) {
      return; // SSR-safe
    }
    const duration = opts?.duration ?? 5000;
    const sticky = opts?.sticky ?? false;
    const toast: ActiveToast = {
      id: this.nextId++,
      severity,
      message,
      sticky,
      createdAt: Date.now(),
    };
    this.toasts.push(toast);
    if (!sticky && duration > 0) {
      setTimeout(() => this.dismiss(toast.id), duration);
    }
  }
}

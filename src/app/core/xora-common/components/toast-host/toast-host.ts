import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

/**
 * Renders the active toasts as a fixed overlay in the bottom-right corner.
 * Mounted once at the root component so it works on every page.
 */
@Component({
  selector: 'app-toast-host',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="toast-host" role="status" aria-live="polite" aria-atomic="true">
      @for (toast of toastService.active; track toast.id) {
        <div class="toast" [class]="'toast--' + toast.severity" (click)="toastService.dismiss(toast.id)">
          <span class="toast__icon" aria-hidden="true">{{ iconFor(toast.severity) }}</span>
          <span class="toast__msg">{{ toast.message }}</span>
          <button class="toast__close" type="button" aria-label="Dismiss">×</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-host {
      position: fixed;
      bottom: 1.25rem;
      right: 1.25rem;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: min(380px, calc(100vw - 2.5rem));
      pointer-events: none;
    }
    .toast {
      pointer-events: auto;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: start;
      gap: 0.625rem;
      padding: 0.75rem 0.875rem;
      border-radius: 8px;
      background: rgba(13, 15, 21, 0.92);
      backdrop-filter: blur(12px);
      color: #f4f5f7;
      font: 500 13px/1.4 'Inter', system-ui, sans-serif;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.04);
      cursor: pointer;
      animation: toast-in 220ms cubic-bezier(0.2, 0.9, 0.3, 1) both;
    }
    @keyframes toast-in {
      from { opacity: 0; transform: translateY(8px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .toast__icon { font-size: 14px; line-height: 1.4; }
    .toast__msg  { word-break: break-word; }
    .toast__close {
      appearance: none;
      background: transparent;
      border: 0;
      color: rgba(255, 255, 255, 0.5);
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
      padding: 0 0 0 4px;
    }
    .toast__close:hover { color: rgba(255, 255, 255, 0.9); }
    .toast--success { border-left: 3px solid #34d399; }
    .toast--error   { border-left: 3px solid #f87171; }
    .toast--warning { border-left: 3px solid #fbbf24; }
    .toast--info    { border-left: 3px solid #60a5fa; }
    .toast--success .toast__icon { color: #34d399; }
    .toast--error   .toast__icon { color: #f87171; }
    .toast--warning .toast__icon { color: #fbbf24; }
    .toast--info    .toast__icon { color: #60a5fa; }
    @media (max-width: 480px) {
      .toast-host {
        bottom: 0.75rem;
        right: 0.75rem;
        left: 0.75rem;
        max-width: none;
      }
    }
  `],
})
export class ToastHost {
  readonly toastService = inject(ToastService);

  iconFor(severity: 'success' | 'error' | 'warning' | 'info'): string {
    switch (severity) {
      case 'success': return '✓';
      case 'error':   return '✕';
      case 'warning': return '!';
      case 'info':    return 'i';
    }
  }
}

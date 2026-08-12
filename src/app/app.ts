import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalLoader } from './shared/components/global-loader/global-loader';
import { ToastHost } from './core/xora-common/components/toast-host/toast-host';
import { FaviconService } from './services/favicon.service';

/**
 * Application root.
 *
 * Intentionally minimal — hosts only the global loader overlay, the toast
 * host, and a single top-level <router-outlet>. All layout chrome lives in
 * dedicated layout components (PortfolioLayout, AuthLayout, XoraLayout)
 * which are wired up in `app.routes.ts` as route groups.
 *
 * The FaviconService is initialized here to dynamically swap the
 * favicon (R ↔ X) and document title between the portfolio and Xora surfaces.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GlobalLoader, ToastHost],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    inject(FaviconService).init();
  }
}

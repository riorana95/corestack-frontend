import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalLoader } from './shared/components/global-loader/global-loader';
import { ToastHost } from './core/xora-common/components/toast-host/toast-host';

/**
 * Application root.
 *
 * Intentionally minimal — hosts only the global loader overlay, the toast
 * host, and a single top-level <router-outlet>. All layout chrome lives in
 * dedicated layout components (PortfolioLayout, AuthLayout, XoraLayout)
 * which are wired up in `app.routes.ts` as route groups.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GlobalLoader, ToastHost],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

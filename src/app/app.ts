import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalLoader } from './shared/components/global-loader/global-loader';

/**
 * Application root.
 *
 * This component is intentionally minimal — it only hosts the global loader
 * overlay and a single top-level <router-outlet>. All layout chrome lives
 * in dedicated layout components (PortfolioLayout, AuthLayout,
 * CoreStackLayout) which are wired up in `app.routes.ts` as route groups.
 *
 * Keeping the root thin avoids the previous dual-selector conflict
 * (where both `App` and `AppComponent` declared `selector: 'app-root'`)
 * and lets each surface own its own visual identity.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GlobalLoader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

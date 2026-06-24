import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundEffects } from '../../shared/components/background-effects/background-effects';
import { Navbar } from '../../shared/components/navbar/navbar';

/**
 * Authenticated CoreStack product layout.
 *
 * Wraps every protected `/corestack/*` route with the CoreStack chrome —
 * animated background + the CoreStack `Navbar` (CS logo, live status,
 * profile, logout, and a back-link to the public portfolio). Child
 * routes (dashboard, interview workspace, vault, docs, splitwise, …)
 * render into the inner `<router-outlet>`.
 *
 * This is the renamed successor to `AppShell` — same markup, clearer name.
 *
 * Route group: `/corestack/*` (guarded by `authGuard`)
 */
@Component({
  selector: 'app-corestack-layout',
  standalone: true,
  imports: [RouterOutlet, BackgroundEffects, Navbar],
  templateUrl: './corestack-layout.html',
  styleUrl: './corestack-layout.scss',
})
export class CoreStackLayout {}

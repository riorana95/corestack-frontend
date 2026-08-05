import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundEffects } from '../../shared/components/background-effects/background-effects';
import { Navbar } from '../../shared/components/navbar/navbar';

/**
 * Authenticated Xora product layout.
 *
 * Wraps every protected `/xora/*` route with the Xora chrome —
 * animated background + the Xora `Navbar` (CS logo, live status,
 * profile, logout, and a back-link to the public portfolio). Child
 * routes (dashboard, interview workspace, vault, docs, splitwise, …)
 * render into the inner `<router-outlet>`.
 *
 * This is the renamed successor to `AppShell` — same markup, clearer name.
 *
 * Route group: `/xora/*` (guarded by `authGuard`)
 */
@Component({
  selector: 'app-xora-layout',
  standalone: true,
  imports: [RouterOutlet, BackgroundEffects, Navbar],
  templateUrl: './xora-layout.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './xora-layout.scss',
})
export class XoraLayout {}

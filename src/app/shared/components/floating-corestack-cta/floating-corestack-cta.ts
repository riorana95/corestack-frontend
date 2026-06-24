import { Component, inject, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

/**
 * Sticky floating "Enter CoreStack" pill.
 *
 * Renders only on the public portfolio surface (wired into
 * `PortfolioLayout`). Sits in the bottom-right corner with a subtle
 * bronze-gold glow that matches the portfolio's cinematic accent.
 *
 * - Hidden for the first ~1s after mount so it doesn't compete with
 *   the hero's intro loader animation.
 * - Fades out briefly when the user is at the very top of the page
 *   (where the hero CTA is already the obvious entry point) and
 *   fades back in once they start scrolling.
 * - On click: routes to `/corestack`. Auth guard handles the
 *   redirect to `/corestack/login` if needed.
 */
@Component({
  selector: 'app-floating-corestack-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-corestack-cta.html',
  styleUrl: './floating-corestack-cta.scss',
})
export class FloatingCorestackCta {
  private readonly router = inject(Router);

  /** Controls the entrance animation (delayed past the intro loader). */
  readonly visible = signal(false);

  /** Fades the pill slightly when the user is at the very top. */
  readonly dimmed = signal(true);

  constructor() {
    afterNextRender(() => {
      // Delay the entrance so the loader + hero animation get the
      // spotlight first.
      window.setTimeout(() => this.visible.set(true), 1400);

      // Dim the pill while the user is in the hero (top ~80vh) so
      // the hero CTA stays the primary entry point there. Brighten
      // once they scroll into the rest of the portfolio.
      const onScroll = () => {
        this.dimmed.set(window.scrollY < window.innerHeight * 0.6);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    });
  }

  enterCoreStack(): void {
    this.router.navigate(['/corestack']);
  }
}

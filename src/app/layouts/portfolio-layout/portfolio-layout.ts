import {
  Component,
  signal,
  afterNextRender,
  inject,
  DestroyRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { LoaderComponent } from '../../components/loader/loader.component';
import { CustomCursorComponent } from '../../components/custom-cursor/custom-cursor.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FloatingCorestackCta } from '../../shared/components/floating-corestack-cta/floating-corestack-cta';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

gsap.registerPlugin(ScrollTrigger);

/**
 * Public-facing portfolio layout.
 *
 * Owns the cinematic surface chrome — intro loader, custom cursor, ambient
 * gradient layers, film grain, the portfolio's `NavigationComponent`, and
 * the floating "Enter CoreStack" CTA. Child routes render into the inner
 * `<router-outlet>` (currently just the `Portfolio` page, but structured
 * this way so future public routes like `/contact` or `/blog` can sit
 * alongside it).
 *
 * Route group: `/`
 */
@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoaderComponent,
    CustomCursorComponent,
    NavigationComponent,
    FloatingCorestackCta,
  ],
  templateUrl: './portfolio-layout.html',
  styleUrl: './portfolio-layout.scss',
})
export class PortfolioLayout {
  private readonly smooth = inject(SmoothScrollService);
  private readonly destroyRef = inject(DestroyRef);

  readonly loading = signal(true);

  constructor() {
    // freeze scroll during the intro loader
    afterNextRender(() => {
      this.smooth.stop();
      document.body.style.overflow = 'hidden';
    });
  }

  onLoaderDone(): void {
    this.loading.set(false);
    this.smooth.start();
    document.body.style.overflow = '';
    // refresh ScrollTrigger after layout settles
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }
}

import {
  Directive,
  ElementRef,
  input,
  effect,
  afterNextRender,
  inject,
  DestroyRef,
  signal,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScrollService } from '../services/smooth-scroll.service';

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxDirective
 * ------------------
 * Moves the host element along Y (or X) at a speed proportional to scroll.
 * `speed` < 1 = slower than scroll (background recedes).
 * `speed` > 1 = faster than scroll (foreground rushes).
 *
 * Combine with z-layering for true spatial depth.
 */
@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective {
  readonly speed = input<number>(0.3, { alias: 'appParallax' });
  readonly axis = input<'y' | 'x'>('y');

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly smooth = inject(SmoothScrollService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      // wait for lenis to be ready
      requestAnimationFrame(() => this.setup());
    });

    this.destroyRef.onDestroy(() => {
      ScrollTrigger.getById(this.triggerId)?.kill();
    });
  }

  private triggerId = `parallax-${Math.random().toString(36).slice(2)}`;

  private setup(): void {
    const el = this.el.nativeElement;
    const axis = this.axis();
    const speed = this.speed();

    const tween = gsap.to(el, {
      [axis]: () => (axis === 'y' ? window.innerHeight : window.innerWidth) * speed * -1,
      ease: 'none',
      scrollTrigger: {
        id: this.triggerId,
        trigger: el.closest('section') ?? el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    this.destroyRef.onDestroy(() => {
      tween.kill();
    });
  }
}

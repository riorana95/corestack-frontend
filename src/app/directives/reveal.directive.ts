import {
  Directive,
  ElementRef,
  input,
  afterNextRender,
  inject,
  DestroyRef,
} from '@angular/core';

/**
 * Lightweight reveal-on-scroll via IntersectionObserver + CSS.
 * No GSAP / blur filters — keeps scroll buttery.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective {
  readonly variant = input<'rise' | 'clip' | 'scale' | 'blur' | 'split'>('rise', {
    alias: 'appReveal',
  });
  readonly delay = input<number>(0);

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.setup());
  }

  private setup(): void {
    const host = this.el.nativeElement;
    host.setAttribute('data-reveal', this.variant());
    if (this.delay() > 0) {
      host.style.setProperty('--reveal-delay', `${this.delay() * 1000}ms`);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      host.classList.add('is-in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            host.classList.add('is-in');
            io.unobserve(host);
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    io.observe(host);
    this.destroyRef.onDestroy(() => io.disconnect());
  }
}

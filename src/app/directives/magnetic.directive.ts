import {
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  DestroyRef,
  input,
} from '@angular/core';
import { gsap } from 'gsap';

/**
 * MagneticDirective
 * ------------------
 * Element gently follows the cursor when hovered — premium feel.
 * Combine with [appTilt] for full spatial hover.
 */
@Directive({
  selector: '[appMagnetic]',
  standalone: true,
})
export class MagneticDirective {
  readonly strength = input<number>(0.4, { alias: 'appMagnetic' });
  readonly radius = input<number>(120);

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.setup());
  }

  private setup(): void {
    const el = this.el.nativeElement;
    const strength = this.strength();
    const radius = this.radius();

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        return;
      }
      const factor = (1 - dist / radius) * strength;
      gsap.to(el, { x: dx * factor, y: dy * factor, duration: 0.4, ease: 'power3.out' });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
    };

    window.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    });
  }
}

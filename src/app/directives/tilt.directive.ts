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
 * TiltDirective
 * --------------
 * 3D rotation following cursor — spatial UI depth on hover.
 * Pair with .glass / .glass-strong surfaces for Vision Pro vibes.
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective {
  readonly max = input<number>(12, { alias: 'appTilt' });
  readonly perspective = input<number>(1000);
  readonly scale = input<number>(1.02);

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.setup());
  }

  private setup(): void {
    const el = this.el.nativeElement;
    const max = this.max();
    const persp = this.perspective();
    const scale = this.scale();

    gsap.set(el, { transformPerspective: persp, transformStyle: 'preserve-3d' });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * max * 2;
      const ry = (px - 0.5) * max * 2;
      gsap.to(el, {
        rotationX: rx,
        rotationY: ry,
        scale,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.9,
        ease: 'elastic.out(1, 0.45)',
      });
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    this.destroyRef.onDestroy(() => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    });
  }
}

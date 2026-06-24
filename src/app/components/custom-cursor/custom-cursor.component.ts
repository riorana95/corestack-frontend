import {
  Component,
  afterNextRender,
  inject,
  DestroyRef,
  signal,
  ElementRef,
  viewChild,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  template: `
    <div class="cursor__dot" #dot></div>
    <div class="cursor__ring" #ring>
      <span class="cursor__label">{{ label() }}</span>
    </div>
  `,
  styles: [
    `
      :host {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
      }
      .cursor__dot {
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 6px;
        margin: -3px 0 0 -3px;
        background: #f5f3ee;
        border-radius: 50%;
        will-change: transform;
      }
      .cursor__ring {
        position: absolute;
        top: 0;
        left: 0;
        width: 44px;
        height: 44px;
        margin: -22px 0 0 -22px;
        border: 1px solid rgba(245, 243, 238, 0.6);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        will-change: transform;
        transition: width 0.4s var(--ease-cinematic),
          height 0.4s var(--ease-cinematic),
          margin 0.4s var(--ease-cinematic),
          background 0.4s var(--ease-cinematic),
          border-color 0.4s var(--ease-cinematic);
      }
      .cursor__label {
        font-family: var(--font-mono);
        font-size: 9px;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #f5f3ee;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      :host.is-hover .cursor__ring {
        width: 70px;
        height: 70px;
        margin: -35px 0 0 -35px;
        background: rgba(245, 243, 238, 0.08);
        border-color: rgba(245, 243, 238, 0.9);
      }
      :host.is-text .cursor__ring {
        width: 4px;
        height: 32px;
        margin: -16px 0 0 -2px;
        border-radius: 2px;
        background: #f5f3ee;
      }
      :host.is-label .cursor__label {
        opacity: 1;
      }
      @media (hover: none), (pointer: coarse) {
        :host { display: none; }
      }
    `,
  ],
})
export class CustomCursorComponent {
  private readonly destroyRef = inject(DestroyRef);
  readonly label = signal('');

  private readonly dotRef = viewChild<ElementRef<HTMLDivElement>>('dot');
  private readonly ringRef = viewChild<ElementRef<HTMLDivElement>>('ring');

  constructor() {
    afterNextRender(() => this.setup());
  }

  private setup(): void {
    const dot = this.dotRef()!.nativeElement;
    const ring = this.ringRef()!.nativeElement;
    const host = dot.parentElement as HTMLElement;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    // DOT: follows mouse instantly
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      gsap.set(dot, { x: mx, y: my });
    };

    // RING: lerps towards mouse for cinematic trailing
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      gsap.set(ring, { x: rx, y: ry });
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a, button, [data-cursor="hover"], [data-cursor="label"], input, textarea'
      ) as HTMLElement | null;
      host.classList.remove('is-hover', 'is-text', 'is-label');
      if (!target) {
        this.label.set('');
        return;
      }
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        host.classList.add('is-text');
        return;
      }
      const lbl = target.getAttribute('data-cursor-label');
      if (lbl) {
        this.label.set(lbl);
        host.classList.add('is-label', 'is-hover');
      } else {
        host.classList.add('is-hover');
      }
    };

    // initial position so it doesn't flash at (0,0)
    gsap.set(dot, { x: mx, y: my });
    gsap.set(ring, { x: rx, y: ry });

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    });
  }
}

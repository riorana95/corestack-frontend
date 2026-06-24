import {
  Injectable,
  signal,
  computed,
  DestroyRef,
  afterNextRender,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, throttleTime } from 'rxjs';
import Lenis from 'lenis';

/**
 * SmoothScrollService
 * --------------------
 * Wraps Lenis for buttery cinematic inertia scrolling and exposes
 * reactive signals for scroll progress (0..1) and current velocity.
 *
 * Designed to be the single source of truth for scroll-driven UI.
 */
@Injectable({ providedIn: 'root' })
export class SmoothScrollService {
  private readonly destroyRef = inject(DestroyRef);

  /** 0 → 1 across the entire document */
  readonly progress = signal(0);
  /** pixels from top */
  readonly scrollY = signal(0);
  /** velocity px/frame (smoothed) */
  readonly velocity = signal(0);

  /** sections registered for intersection-based active nav */
  readonly activeSection = signal<string>('hero');

  private lenis!: Lenis;
  private rafId = 0;
  private readonly sections = new Map<string, HTMLElement>();

  constructor() {
    afterNextRender(() => {
      this.initLenis();
      this.bindScroll();
      this.observeSections();
    });
  }

  private initLenis(): void {
    this.lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      this.rafId = requestAnimationFrame(raf);
    };
    this.rafId = requestAnimationFrame(raf);

    this.destroyRef.onDestroy(() => {
      cancelAnimationFrame(this.rafId);
      this.lenis.destroy();
    });
  }

  private bindScroll(): void {
    this.lenis.on('scroll', (e: { scroll: number; velocity: number }) => {
      this.scrollY.set(e.scroll);
      this.velocity.set(e.velocity);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      this.progress.set(max > 0 ? Math.min(1, Math.max(0, e.scroll / max)) : 0);
    });

    // keyboard navigation
    fromEvent<KeyboardEvent>(window, 'keydown')
      .pipe(takeUntilDestroyed(this.destroyRef), throttleTime(80))
      .subscribe((e) => {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          e.preventDefault();
          this.lenis.scrollTo(window.scrollY + window.innerHeight * 0.85, {
            duration: 1.2,
          });
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          this.lenis.scrollTo(window.scrollY - window.innerHeight * 0.85, {
            duration: 1.2,
          });
        }
      });
  }

  private observeSections(): void {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
            const id = entry.target.id;
            if (id) this.activeSection.set(id);
          }
        }
      },
      { threshold: [0.35, 0.6, 0.85] }
    );

    this.destroyRef.onDestroy(() => io.disconnect());

    // observe after small delay so all sections are rendered
    setTimeout(() => {
      document.querySelectorAll('section[id]').forEach((s) => {
        io.observe(s);
        this.sections.set(s.id, s as HTMLElement);
      });
    }, 200);
  }

  /** Public API: smoothly scroll to a section id */
  scrollTo(target: string | number): void {
    if (typeof target === 'number') {
      this.lenis.scrollTo(target, { duration: 1.4 });
      return;
    }
    const el = this.sections.get(target) ?? document.getElementById(target);
    if (el) this.lenis.scrollTo(el, { duration: 1.4, offset: -40 });
  }

  /** Pause scrolling (used by loader / overlays) */
  stop(): void {
    this.lenis.stop();
  }

  /** Resume scrolling */
  start(): void {
    this.lenis.start();
  }
}

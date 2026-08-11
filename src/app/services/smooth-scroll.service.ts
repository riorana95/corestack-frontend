import {
  Injectable,
  signal,
  DestroyRef,
  afterNextRender,
  inject,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * Native scroll coordination for portfolio navigation.
 * Replaces Lenis to avoid permanent RAF loops and scroll lag.
 */
@Injectable({ providedIn: 'root' })
export class SmoothScrollService {
  private readonly destroyRef = inject(DestroyRef);

  readonly progress = signal(0);
  readonly scrollY = signal(0);
  readonly velocity = signal(0);
  readonly activeSection = signal<string>('hero');

  private locked = false;
  private readonly sections = new Map<string, HTMLElement>();

  constructor() {
    afterNextRender(() => {
      this.bindScroll();
      this.observeSections();
    });
  }

  private bindScroll(): void {
    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      this.scrollY.set(y);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      this.progress.set(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
    };

    update();
    fromEvent(window, 'scroll', { passive: true })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(update);
  }

  private observeSections(): void {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const id = entry.target.id;
            if (id) this.activeSection.set(id);
          }
        }
      },
      { threshold: [0.3, 0.55] },
    );

    this.destroyRef.onDestroy(() => io.disconnect());

    setTimeout(() => {
      document.querySelectorAll('section[id]').forEach((s) => {
        io.observe(s);
        this.sections.set(s.id, s as HTMLElement);
      });
    }, 120);
  }

  scrollTo(target: string | number): void {
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: this.locked ? 'auto' : 'smooth' });
      return;
    }
    const el = this.sections.get(target) ?? document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: this.locked ? 'auto' : 'smooth' });
    }
  }

  stop(): void {
    this.locked = true;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  start(): void {
    this.locked = false;
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
}

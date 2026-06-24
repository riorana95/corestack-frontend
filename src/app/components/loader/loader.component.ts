import {
  Component,
  EventEmitter,
  Output,
  afterNextRender,
  inject,
  signal,
  DestroyRef,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div class="loader" #loader>
      <div class="loader__inner">
        <div class="loader__brand">
          <span class="loader__num">{{ count() }}</span>
          <span class="loader__pct">%</span>
        </div>
        <div class="loader__bar"><div class="loader__bar-fill" #fill></div></div>
        <div class="loader__meta">
          <span>Rana Rahul Kumar</span>
          <span>Senior Full Stack Engineer</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .loader {
        position: fixed;
        inset: 0;
        z-index: 10000;
        background: var(--bg);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .loader__inner {
        width: min(80vw, 460px);
        display: flex;
        flex-direction: column;
        gap: 28px;
      }
      .loader__brand {
        font-family: var(--font-display);
        font-size: clamp(72px, 16vw, 160px);
        line-height: 0.9;
        color: var(--ink);
        display: flex;
        align-items: baseline;
      }
      .loader__pct {
        font-size: 0.3em;
        color: var(--accent);
        margin-left: 0.15em;
      }
      .loader__bar {
        height: 1px;
        width: 100%;
        background: var(--line);
        position: relative;
        overflow: hidden;
      }
      .loader__bar-fill {
        position: absolute;
        inset: 0;
        width: 0%;
        background: linear-gradient(90deg, var(--accent-deep), var(--accent-bright));
      }
      .loader__meta {
        display: flex;
        justify-content: space-between;
        font-family: var(--font-mono);
        font-size: 11px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--ink-muted);
      }
    `,
  ],
})
export class LoaderComponent {
  @Output() done = new EventEmitter<void>();
  readonly count = signal(0);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.run());
  }

  private run(): void {
    const obj = { v: 0 };
    const tl = gsap.timeline();

    tl.to(obj, {
      v: 100,
      duration: 2.4,
      ease: 'power2.inOut',
      onUpdate: () => this.count.set(Math.round(obj.v)),
    })
      .to('.loader__bar-fill', {
        width: '100%',
        duration: 2.4,
        ease: 'power2.inOut',
      }, '<')
      .to('.loader__inner', {
        y: -40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.in',
      }, '+=0.3')
      .to('.loader', {
        yPercent: -100,
        duration: 1.1,
        ease: 'expo.inOut',
        onComplete: () => {
          this.done.emit();
        },
      }, '-=0.4');

    this.destroyRef.onDestroy(() => tl.kill());
  }
}

import {
  Component,
  EventEmitter,
  Output,
  afterNextRender,
  inject,
  signal,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div class="loader" [class.is-exit]="exiting()">
      <div class="loader__inner">
        <div class="loader__mark">RRK</div>
        <div class="loader__bar"><div class="loader__bar-fill" [style.width.%]="count()"></div></div>
        <div class="loader__meta">
          <span>Rana Rahul Kumar</span>
          <span>{{ count() }}%</span>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .loader {
        position: fixed;
        inset: 0;
        z-index: 10000;
        background: var(--bg);
        display: grid;
        place-items: center;
        transition: transform 0.7s var(--ease), opacity 0.5s var(--ease);
      }
      .loader.is-exit {
        transform: translateY(-100%);
        opacity: 0;
      }
      .loader__inner {
        width: min(78vw, 380px);
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }
      .loader__mark {
        font-family: var(--font-display);
        font-weight: 800;
        font-size: clamp(3.5rem, 12vw, 5.5rem);
        letter-spacing: -0.04em;
        color: var(--ink);
        line-height: 1;
      }
      .loader__bar {
        height: 2px;
        background: var(--line);
        overflow: hidden;
        border-radius: 999px;
      }
      .loader__bar-fill {
        height: 100%;
        width: 0;
        background: linear-gradient(90deg, var(--accent-deep), var(--accent-bright));
        transition: width 0.05s linear;
      }
      .loader__meta {
        display: flex;
        justify-content: space-between;
        font-family: var(--font-mono);
        font-size: 0.68rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ink-muted);
      }
    `,
  ],
})
export class LoaderComponent {
  @Output() done = new EventEmitter<void>();
  readonly count = signal(0);
  readonly exiting = signal(false);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.run());
  }

  private run(): void {
    let v = 0;
    const id = window.setInterval(() => {
      v += Math.random() * 18 + 8;
      if (v >= 100) {
        v = 100;
        this.count.set(100);
        window.clearInterval(id);
        window.setTimeout(() => {
          this.exiting.set(true);
          window.setTimeout(() => this.done.emit(), 650);
        }, 180);
      } else {
        this.count.set(Math.round(v));
      }
    }, 70);

    this.destroyRef.onDestroy(() => window.clearInterval(id));
  }
}

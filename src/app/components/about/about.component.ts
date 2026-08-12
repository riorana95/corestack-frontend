import {
  Component,
  afterNextRender,
  inject,
  DestroyRef,
  ElementRef,
  viewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSON, STATS, EDUCATION } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="about" class="about">
      <div class="container">
        <header class="section-head" appReveal="rise">
          <span class="label">02 — Profile</span>
          <h2 class="section-head__title display">
            Frontend that <em>moves</em>, backend that <em>holds</em>.
          </h2>
        </header>

        <div class="about__grid">
          <div class="about__copy">
            <p class="about__lead" appReveal="rise">
              I'm {{ person.name }} — a {{ person.title | lowercase }} based in
              {{ person.location }}. For 4+ years I've been shipping enterprise insurance
              platforms at Digit Insurance, owning the stack from Angular standalone
              components down to Spring Boot services and PostgreSQL schemas.
            </p>

            <p class="about__body" appReveal="rise" [delay]="0.08">
              My favourite work sits where motion design meets system design: kinetic Angular
              UIs driven by Signals and OnPush, talking to Java 21 services with virtual
              threads, secured through Spring Security, and shipped through Kafka and AWS.
            </p>

            <p class="about__body" appReveal="rise" [delay]="0.12">
              Beyond the day job, I'm building <span class="text-accent">Xora</span> — a
              modular full-stack platform hosting Interview Prep, expense sharing, and more
              with shared auth and Flyway-managed persistence.
            </p>

            <div class="about__education" appReveal="rise" [delay]="0.16">
              <span class="label">Education</span>
              <p class="about__education-title">{{ education.degree }}</p>
              <p class="about__education-meta">
                {{ education.institution }} · {{ education.period }}
              </p>
            </div>
          </div>

          <aside class="about__aside" appReveal="scale" [delay]="0.1">
            <!-- Photo slot: replace .about__photo-placeholder with <img src="..." alt="..."> -->
            <div class="about__portrait surface">
              <div class="about__photo-placeholder" aria-label="Portrait placeholder">
                <span>{{ person.initials }}</span>
                <img src="/assests/profile.png" alt="Profile photo" />
              </div>
              <div class="about__portrait-meta">
                <span class="label">Stack focus</span>
                <p>Angular 21 · Spring Boot 3 · Java 21</p>
              </div>
              <div class="about__portrait-tags">
                @for (tag of focusTags; track tag) {
                  <span class="chip">{{ tag }}</span>
                }
              </div>
            </div>
          </aside>
        </div>

        <div class="stats" #statsRow>
          @for (stat of stats; track stat.label) {
            <div class="stat" data-stat appReveal="rise" [delay]="$index * 0.06">
              <span
                class="stat__value"
                [attr.data-target]="stat.value"
                [attr.data-suffix]="stat.suffix ?? ''"
                >0</span
              >
              <span class="stat__label label">{{ stat.label }}</span>
              <span class="stat__detail">{{ stat.detail }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly person = PERSON;
  readonly stats = STATS;
  readonly education = EDUCATION;
  readonly focusTags = ['Signals', 'Standalone', 'NgRx', 'RxJS', 'Spring Security', 'Kafka', 'AWS'];

  private readonly destroyRef = inject(DestroyRef);
  private readonly statsRef = viewChild<ElementRef<HTMLElement>>('statsRow');

  constructor() {
    afterNextRender(() => this.bindCounters());
  }

  private bindCounters(): void {
    const row = this.statsRef()?.nativeElement;
    if (!row) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        this.runCounters(row);
        io.disconnect();
      },
      { threshold: 0.4 },
    );

    io.observe(row);
    this.destroyRef.onDestroy(() => io.disconnect());
  }

  private runCounters(row: HTMLElement): void {
    row.querySelectorAll<HTMLElement>('.stat__value').forEach((el, i) => {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const start = performance.now();
      const duration = 1200 + i * 80;

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }
}

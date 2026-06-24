import {
  Component,
  afterNextRender,
  inject,
  DestroyRef,
  ElementRef,
  viewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSON, STATS, EDUCATION } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

gsap.registerPlugin(ScrollTrigger);

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
            A frontend that <em class="serif-italic text-accent">moves</em>,
            a backend that <em class="serif-italic text-accent">holds</em>.
          </h2>
        </header>

        <div class="about__grid">
          <div class="about__copy">
            <p class="about__lead" appReveal="clip">
              I'm {{ person.name }} — a {{ person.title | lowercase }} based in {{ person.location }}.
              For 4+ years I've been shipping enterprise insurance platforms at Digit Insurance,
              owning the full stack from Angular standalone components down to Spring Boot
              microservices and PostgreSQL schemas.
            </p>

            <p class="about__body" appReveal="rise" [delay]="0.1">
              My favourite work sits where motion design meets system design: kinetic Angular UIs
              driven by Signals and OnPush change detection, talking to Java 21 services with
              virtual threads, JWT-secured through Spring Security, persisted via JPA/Hibernate,
              and shipped through Kafka and AWS. I've led 5 UI engineers and coordinated
              cross-functional teams of ~17 — owning the requirements-to-delivery pipeline.
            </p>

            <p class="about__body" appReveal="rise" [delay]="0.15">
              Beyond the day job, I'm building <span class="text-accent">CoreStack</span> — a
              modular full-stack platform hosting multiple products (Interview Prep,
              Splitwise-style expense sharing, AI-driven commerce) with shared auth, reusable
              frontend architecture, and Flyway-managed PostgreSQL persistence.
            </p>

            <div class="about__education" appReveal="rise" [delay]="0.2">
              <span class="label">Education</span>
              <p class="about__education-title">{{ education.degree }}</p>
              <p class="about__education-meta">{{ education.institution }} · {{ education.period }}</p>
            </div>
          </div>

          <aside class="about__aside">
            <div class="about__portrait glass" appReveal="scale" [delay]="0.1">
              <div class="about__portrait-mark">
                <span>{{ person.initials }}</span>
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

        <!-- stats counter row -->
        <div class="stats" #statsRow>
          @for (stat of stats; track stat.label) {
            <div class="stat" data-stat>
              <span class="stat__value" [attr.data-target]="stat.value" [attr.data-suffix]="stat.suffix ?? ''" [attr.data-prefix]="stat.prefix ?? ''">0</span>
              <span class="stat__label label">{{ stat.label }}</span>
              <span class="stat__detail">{{ stat.detail }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly person = PERSON;
  readonly stats = STATS;
  readonly education = EDUCATION;
  readonly focusTags = ['Signals', 'Standalone', 'NgRx', 'RxJS', 'Spring Security', 'Kafka', 'AWS'];

  private readonly destroyRef = inject(DestroyRef);
  private readonly statsRef = viewChild<ElementRef<HTMLElement>>('statsRow');
  private readonly counted = signal(false);

  constructor() {
    afterNextRender(() => this.bindCounters());
  }

  private bindCounters(): void {
    const st = ScrollTrigger.create({
      trigger: this.statsRef()!.nativeElement,
      start: 'top 80%',
      once: true,
      onEnter: () => this.runCounters(),
    });

    this.destroyRef.onDestroy(() => st.kill());
  }

  private runCounters(): void {
    const els = this.statsRef()!.nativeElement.querySelectorAll<HTMLElement>('[data-stat]');
    els.forEach((el, i) => {
      const valEl = el.querySelector('.stat__value')!;
      const target = parseFloat(valEl.getAttribute('data-target') || '0');
      const suffix = valEl.getAttribute('data-suffix') || '';
      const prefix = valEl.getAttribute('data-prefix') || '';
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 2.2,
        delay: i * 0.12,
        ease: 'power3.out',
        onUpdate: () => {
          valEl.textContent = `${prefix}${Math.round(obj.v)}${suffix}`;
        },
      });
    });
  }
}

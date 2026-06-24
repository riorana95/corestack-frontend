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
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../../data/portfolio.data';
import { TiltDirective } from '../../directives/tilt.directive';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TiltDirective],
  template: `
    <section id="projects" class="proj" #proj>
      <div class="container proj__head">
        <header class="section-head">
          <span class="label">04 — CoreStack</span>
          <h2 class="section-head__title display">
            Selected <em class="serif-italic text-accent">work</em> — scroll horizontally.
          </h2>
          <p class="section-head__sub">
            Four products on one shared platform. Angular 21, Spring Boot 4, PostgreSQL, JWT,
            Flyway. Scroll to traverse.
          </p>
        </header>
      </div>

      <div class="proj__track-wrap" #trackWrap>
        <div class="proj__track" #track>
          @for (project of projects; track project.title; let i = $index) {
            <article class="proj__card" [appTilt]="6" [style.--i]="i">
              <div class="proj__card-inner glass-strong">
                <header class="proj__card-head">
                  <div class="proj__card-idx">
                    <span class="label">N° {{ project.index }}</span>
                    <span class="proj__card-status" [attr.data-status]="project.status">
                      <span class="proj__status-dot"></span>{{ project.status }}
                    </span>
                  </div>
                  <span class="proj__card-year">{{ project.year }}</span>
                </header>

                <div class="proj__card-body">
                  <h3 class="proj__card-title display">{{ project.title }}</h3>
                  <p class="proj__card-tagline serif-italic text-accent">{{ project.tagline }}</p>
                  <p class="proj__card-desc">{{ project.description }}</p>
                </div>

                <div class="proj__card-highlights">
                  @for (hl of project.highlights; track hl) {
                    <div class="proj__hl">
                      <span class="proj__hl-mark">◆</span>
                      <span>{{ hl }}</span>
                    </div>
                  }
                </div>

                <footer class="proj__card-foot">
                  <div class="proj__stack">
                    @for (tech of project.stack; track tech) {
                      <span class="chip">{{ tech }}</span>
                    }
                  </div>
                  @if (project.title === 'CoreStack') {
                    <button
                      class="proj__view-live"
                      (click)="enterCoreStack($event)"
                      data-cursor="hover"
                      data-cursor-label="Enter"
                    >
                      <span>View live</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  }
                </footer>
              </div>
            </article>
          }

          <!-- end card -->
          <article class="proj__card proj__card--end">
            <div class="proj__card-inner proj__end">
              <span class="label">End of selected work</span>
              <h3 class="display">More in the works.</h3>
              <p>AI-driven commerce is next — and I'm always tinkering.</p>
              <button class="btn btn--ghost" (click)="smooth.scrollTo('contact')" data-cursor="hover">
                <span>Discuss a project</span>
              </button>
            </div>
          </article>
        </div>
      </div>

      <div class="proj__progress">
        <span class="proj__progress-label label">Drag · Scroll</span>
        <div class="proj__progress-bar">
          <span class="proj__progress-fill" #progressFill></span>
        </div>
      </div>
    </section>
  `,
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
  readonly smooth = inject(SmoothScrollService);
  private readonly router = inject(Router);

  private readonly destroyRef = inject(DestroyRef);
  private readonly trackRef = viewChild<ElementRef<HTMLElement>>('track');
  private readonly trackWrapRef = viewChild<ElementRef<HTMLElement>>('trackWrap');
  private readonly progressFillRef = viewChild<ElementRef<HTMLElement>>('progressFill');

  /**
   * "View live" CTA on the CoreStack project card. Stops propagation so
   * the click doesn't bubble into the card's tilt/scroll handlers, then
   * hands off to `/corestack` (auth-guarded — unauthenticated users
   * will be bounced to login with returnUrl set).
   */
  enterCoreStack(event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/corestack']);
  }

  constructor() {
    afterNextRender(() => this.setupHorizontal());
  }

  private setupHorizontal(): void {
    const track = this.trackRef()!.nativeElement;
    const wrap = this.trackWrapRef()!.nativeElement;
    const fill = this.progressFillRef()!.nativeElement;

    // only on >= 1024px wide screens (mobile uses native horizontal scroll)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const totalScroll = track.scrollWidth - window.innerWidth;

      const st = ScrollTrigger.create({
        trigger: wrap,
        start: 'top top',
        end: () => `+=${totalScroll + window.innerHeight * 0.5}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: gsap
          .timeline()
          .to(track, { x: -totalScroll, ease: 'none' }, 0)
          .to(
            fill,
            { scaleX: 1, ease: 'none', transformOrigin: 'left' },
            0
          ),
      });

      return () => st.kill();
    });

    mm.add('(max-width: 1023px)', () => {
      // simple progress for mobile
      const onScroll = () => {
        const max = track.scrollWidth - track.clientWidth;
        const p = max > 0 ? track.scrollLeft / max : 0;
        gsap.set(fill, { scaleX: p, transformOrigin: 'left' });
      };
      track.addEventListener('scroll', onScroll, { passive: true });
      return () => track.removeEventListener('scroll', onScroll);
    });

    this.destroyRef.onDestroy(() => mm.revert());
  }
}

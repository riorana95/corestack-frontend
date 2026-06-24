import {
  Component,
  afterNextRender,
  inject,
  DestroyRef,
  ElementRef,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="experience" class="exp" #exp>
      <div class="container">
        <header class="section-head" appReveal="rise">
          <span class="label">03 — Trajectory</span>
          <h2 class="section-head__title display">
            Four years, <em class="serif-italic text-accent">one company</em>,
            three promotions.
          </h2>
        </header>

        <div class="exp__timeline" #timeline>
          <div class="exp__line">
            <span class="exp__line-progress" #lineProgress></span>
          </div>

          @for (item of experience; track item.period; let i = $index) {
            <article class="exp__item" [class.is-active]="i === 0">
              <div class="exp__marker">
                <span class="exp__marker-dot"></span>
                <span class="exp__marker-idx">0{{ i + 1 }}</span>
              </div>

              <div class="exp__card glass" appReveal="rise" [delay]="i * 0.05">
                <div class="exp__card-head">
                  <div>
                    <span class="exp__period">{{ item.period }}</span>
                    <h3 class="exp__role">{{ item.role }}</h3>
                    <p class="exp__company">
                      <span class="text-accent">{{ item.company }}</span> · {{ item.location }}
                    </p>
                  </div>
                </div>

                <p class="exp__highlight">{{ item.highlight }}</p>

                <ul class="exp__bullets">
                  @for (bullet of item.bullets; track bullet) {
                    <li>
                      <span class="exp__bullet-mark"></span>
                      <span>{{ bullet }}</span>
                    </li>
                  }
                </ul>

                <div class="exp__tags">
                  @for (tag of item.tags; track tag) {
                    <span class="chip">{{ tag }}</span>
                  }
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;

  private readonly destroyRef = inject(DestroyRef);
  private readonly timelineRef = viewChild<ElementRef<HTMLElement>>('timeline');
  private readonly progressRef = viewChild<ElementRef<HTMLElement>>('lineProgress');

  constructor() {
    afterNextRender(() => this.animate());
  }

  private animate(): void {
    const timeline = this.timelineRef()!.nativeElement;
    const progress = this.progressRef()!.nativeElement;

    const st = ScrollTrigger.create({
      trigger: timeline,
      start: 'top 70%',
      end: 'bottom 70%',
      scrub: 1,
      animation: gsap.fromTo(
        progress,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', transformOrigin: 'top' }
      ),
    });

    this.destroyRef.onDestroy(() => st.kill());
  }
}

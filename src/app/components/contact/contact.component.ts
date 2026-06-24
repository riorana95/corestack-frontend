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
import { PERSON } from '../../data/portfolio.data';
import { SmoothScrollService } from '../../services/smooth-scroll.service';
import { MagneticDirective } from '../../directives/magnetic.directive';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MagneticDirective],
  template: `
    <section id="contact" class="contact" #contact>
      <div class="container">
        <div class="contact__inner">
          <span class="label">07 — Contact</span>

          <h2 class="contact__title display" #title>
            <span class="contact__line"><span>Let's build something</span></span>
            <span class="contact__line"><span class="contact__word--accent serif-italic">cinematic</span></span>
            <span class="contact__line"><span>together.</span></span>
          </h2>

          <p class="contact__sub" #sub>
            Available for Full Stack or Angular-focused roles, freelance consulting,
            and ambitious side-project collaborations. Remote or Bengaluru on-site.
          </p>

          <div class="contact__actions" #actions>
            <a
              class="contact__primary"
              [href]="person.links.email"
              [appMagnetic]="0.25"
              data-cursor="hover"
              data-cursor-label="Mail"
            >
              <span class="contact__primary-label">{{ person.email }}</span>
              <span class="contact__primary-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          <div class="contact__links">
            <a
              class="contact__link"
              [href]="person.links.linkedin"
              target="_blank"
              rel="noopener"
              data-cursor="hover"
              data-cursor-label="Visit"
            >
              <span class="contact__link-idx">01</span>
              <span class="contact__link-name">LinkedIn</span>
              <span class="contact__link-url">/in/riorana95</span>
              <span class="contact__link-arrow">→</span>
            </a>
            <a
              class="contact__link"
              [href]="person.links.github"
              target="_blank"
              rel="noopener"
              data-cursor="hover"
              data-cursor-label="Visit"
            >
              <span class="contact__link-idx">02</span>
              <span class="contact__link-name">GitHub</span>
              <span class="contact__link-url">/riorana95</span>
              <span class="contact__link-arrow">→</span>
            </a>
            <a
              class="contact__link"
              [href]="'tel:' + person.phone"
              data-cursor="hover"
              data-cursor-label="Call"
            >
              <span class="contact__link-idx">03</span>
              <span class="contact__link-name">Phone</span>
              <span class="contact__link-url">{{ person.phone }}</span>
              <span class="contact__link-arrow">→</span>
            </a>
          </div>

          <footer class="contact__foot">
            <span>© {{ year }} {{ person.name }}</span>
            <span class="contact__foot-meta">Designed &amp; engineered in Angular 21 · Bengaluru</span>
            <button class="contact__top" (click)="smooth.scrollTo('hero')" data-cursor="hover">
              Back to top ↑
            </button>
          </footer>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly person = PERSON;
  readonly smooth = inject(SmoothScrollService);
  readonly year = new Date().getFullYear();

  private readonly destroyRef = inject(DestroyRef);
  private readonly titleRef = viewChild<ElementRef<HTMLElement>>('title');

  constructor() {
    afterNextRender(() => this.animate());
  }

  private animate(): void {
    const title = this.titleRef()!.nativeElement;
    const words = title.querySelectorAll('.contact__line > span');

    gsap.set(words, { yPercent: 120 });
    const st = ScrollTrigger.create({
      trigger: title,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(words, {
          yPercent: 0,
          duration: 1.4,
          ease: 'expo.out',
          stagger: 0.12,
        });
      },
    });

    this.destroyRef.onDestroy(() => st.kill());
  }
}

import {
  Component,
  afterNextRender,
  inject,
  DestroyRef,
  ElementRef,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSON } from '../../data/portfolio.data';
import { SmoothScrollService } from '../../services/smooth-scroll.service';
import { ParallaxDirective } from '../../directives/parallax.directive';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ParallaxDirective],
  template: `
    <section id="hero" class="hero" #hero>
      <!-- parallax depth layers -->
      <div class="hero__bg-layer hero__bg-layer--far" [appParallax]="0.12"></div>
      <div class="hero__bg-layer hero__bg-layer--mid" [appParallax]="0.28"></div>
      <div class="hero__bg-grid" [appParallax]="0.18"></div>

      <!-- floating spatial shards -->
      <div class="hero__shards">
        <div class="shard shard--1" [appParallax]="0.6"></div>
        <div class="shard shard--2" [appParallax]="-0.4"></div>
        <div class="shard shard--3" [appParallax]="0.8"></div>
        <div class="shard shard--4" [appParallax]="-0.7"></div>
      </div>

      <div class="hero__content container">
        <div class="hero__meta">
          <span class="hero__meta-line"></span>
          <span class="label">{{ person.location }} · Available 2026</span>
        </div>

        <h1 class="hero__title">
          <span class="hero__line"><span class="hero__word">Senior</span></span>
          <span class="hero__line"><span class="hero__word hero__word--accent">Full Stack</span></span>
          <span class="hero__line"><span class="hero__word">Engineer<em>.</em></span></span>
        </h1>

        <div class="hero__sub">
          <p class="hero__paragraph" #paragraph>
            {{ person.heroParagraph }}
          </p>
        </div>

        <div class="hero__actions" #actions>
          <button
            class="btn btn--primary"
            (click)="smooth.scrollTo('projects')"
            data-cursor="hover"
            data-cursor-label="View"
          >
            <span>View selected work</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <button
            class="btn btn--ghost"
            (click)="enterCoreStack()"
            data-cursor="hover"
            data-cursor-label="Enter"
          >
            <span>Enter CoreStack</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- floating stat card -->
        <div class="hero__card glass-strong" #card>
          <div class="hero__card-head">
            <span class="hero__card-dot"></span>
            <span class="label">Now</span>
          </div>
          <p class="hero__card-title">Leading QC &amp; Rule Engine Platform</p>
          <p class="hero__card-sub">Life Insurance · Angular 21 · Spring Boot 3 · Java 21</p>
          <div class="hero__card-foot">
            <span>Digit Insurance</span>
            <span class="text-accent">2024 — Now</span>
          </div>
        </div>
      </div>

      <!-- scroll cue -->
      <div class="hero__cue" #cue>
        <span class="label">Scroll</span>
        <span class="hero__cue-line"></span>
      </div>

      <!-- side meta -->
      <div class="hero__side hero__side--left">
        <span class="label">N° 01 / 07</span>
        <span class="hero__side-line"></span>
      </div>
      <div class="hero__side hero__side--right">
        <span class="hero__side-line"></span>
        <span class="label">{{ person.experienceYears }}+ yrs · Angular · Spring Boot</span>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly person = PERSON;
  readonly smooth = inject(SmoothScrollService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  private readonly paragraphRef = viewChild<ElementRef<HTMLElement>>('paragraph');
  private readonly actionsRef = viewChild<ElementRef<HTMLElement>>('actions');
  private readonly cardRef = viewChild<ElementRef<HTMLElement>>('card');
  private readonly cueRef = viewChild<ElementRef<HTMLElement>>('cue');

  /**
   * Hand off from the public portfolio into the protected CoreStack
   * surface. If the user is already authenticated they'll land on the
   * dashboard; otherwise `authGuard` will bounce them to login and
   * preserve `/corestack` as the `returnUrl` so they flow straight
   * back after signing in.
   */
  enterCoreStack(): void {
    this.router.navigate(['/corestack']);
  }

  constructor() {
    afterNextRender(() => this.animate());
  }

  private animate(): void {
    const tl = gsap.timeline({ delay: 0.3, defaults: { ease: 'expo.out' } });

    tl.from('.hero__meta', { y: 30, opacity: 0, duration: 1 })
      .from(
        '.hero__word',
        { yPercent: 120, rotate: 6, duration: 1.4, stagger: 0.12 },
        '-=0.6'
      )
      .from(
        this.paragraphRef()!.nativeElement,
        { y: 30, opacity: 0, filter: 'blur(12px)', duration: 1.2 },
        '-=0.8'
      )
      .from(
        this.actionsRef()!.nativeElement.querySelectorAll('.btn'),
        { y: 30, opacity: 0, duration: 1, stagger: 0.1 },
        '-=0.8'
      )
      .from(
        this.cardRef()!.nativeElement,
        { y: 80, opacity: 0, scale: 0.9, duration: 1.4 },
        '-=1'
      )
      .from(
        this.cueRef()!.nativeElement,
        { opacity: 0, duration: 1 },
        '-=0.4'
      )
      .from(
        '.hero__side',
        { opacity: 0, duration: 1, stagger: 0.1 },
        '-=0.8'
      );

    // continuous scroll-driven exit (cinematic push-back)
    const st = ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
      animation: gsap
        .timeline()
        .to('.hero__content', { y: -180, opacity: 0, filter: 'blur(10px)', ease: 'none' }, 0)
        .to('.hero__bg-layer--far', { y: -60, ease: 'none' }, 0)
        .to('.hero__bg-layer--mid', { y: -120, ease: 'none' }, 0)
        .to('.shard', { y: -260, opacity: 0, ease: 'none', stagger: 0.05 }, 0)
        .to('.hero__cue', { opacity: 0, ease: 'none' }, 0)
        .to('.hero__side', { opacity: 0, ease: 'none' }, 0),
    });

    // floating card drift
    const drift = gsap.to(this.cardRef()!.nativeElement, {
      y: '-=14',
      duration: 3.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    this.destroyRef.onDestroy(() => {
      tl.kill();
      st.kill();
      drift.kill();
    });
  }
}

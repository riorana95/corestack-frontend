import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PERSON } from '../../data/portfolio.data';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">
      <div class="hero__grid" aria-hidden="true"></div>

      <div class="container hero__layout">
        <div class="hero__copy">
          <p class="hero__eyebrow label">{{ person.location }} · Open to 2026</p>

          <h1 class="hero__brand display">
            {{ person.firstName }}
            <span class="hero__brand-accent">{{ person.lastName }}</span>
          </h1>

          <p class="hero__role">{{ person.title }}</p>
          <p class="hero__lede">{{ person.tagline }}</p>

          <div class="hero__actions">
            <button class="btn btn--primary" type="button" (click)="enterXora()">
              <span>Enter Xora</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
            <button class="btn btn--ghost" type="button" (click)="smooth.scrollTo('projects')">
              <span>Selected work</span>
            </button>
          </div>
        </div>

        <!-- CSS 3D stage — GPU transforms only, no WebGL -->
        <div class="hero__stage" aria-hidden="true">
          <div class="stage">
            <div class="stage__ring stage__ring--outer"></div>
            <div class="stage__ring stage__ring--mid"></div>
            <div class="cube">
              <span class="cube__face cube__face--front"></span>
              <span class="cube__face cube__face--back"></span>
              <span class="cube__face cube__face--right"></span>
              <span class="cube__face cube__face--left"></span>
              <span class="cube__face cube__face--top"></span>
              <span class="cube__face cube__face--bottom"></span>
            </div>
            <div class="stage__orb"></div>
            <div class="stage__slab stage__slab--a"></div>
            <div class="stage__slab stage__slab--b"></div>
          </div>
        </div>
      </div>

      <div class="hero__meta container">
        <span class="label">{{ person.subtitle }}</span>
        <span class="hero__meta-line" aria-hidden="true"></span>
        <span class="label">{{ person.experienceYears }}+ yrs · Digit Insurance</span>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly person = PERSON;
  readonly smooth = inject(SmoothScrollService);
  private readonly router = inject(Router);

  enterXora(): void {
    this.router.navigate(['/xora']);
  }
}

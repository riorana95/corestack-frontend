import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSON } from '../../data/portfolio.data';
import { SmoothScrollService } from '../../services/smooth-scroll.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact__inner" appReveal="rise">
          <span class="label">07 — Contact</span>

          <h2 class="contact__title display">
            Let's build something
            <em>durable</em>
            together.
          </h2>

          <p class="contact__sub">
            Available for Full Stack or Angular-focused roles, freelance consulting, and
            ambitious side projects. Remote or Bengaluru on-site.
          </p>

          <a class="contact__primary" [href]="person.links.email">
            <span>{{ person.email }}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <div class="contact__links">
            <a
              class="contact__link"
              [href]="person.links.linkedin"
              target="_blank"
              rel="noopener"
            >
              <span class="mono">01</span>
              <span>LinkedIn</span>
              <span class="contact__link-url">/in/riorana95</span>
            </a>
            <a
              class="contact__link"
              [href]="person.links.github"
              target="_blank"
              rel="noopener"
            >
              <span class="mono">02</span>
              <span>GitHub</span>
              <span class="contact__link-url">/riorana95</span>
            </a>
            <a class="contact__link" [href]="'tel:' + person.phone">
              <span class="mono">03</span>
              <span>Phone</span>
              <span class="contact__link-url">{{ person.phone }}</span>
            </a>
          </div>

          <footer class="contact__foot">
            <span>© {{ year }} {{ person.name }}</span>
            <span class="contact__foot-meta">Designed &amp; engineered in Angular · Bengaluru</span>
            <button class="contact__top" type="button" (click)="smooth.scrollTo('hero')">
              Back to top ↑
            </button>
          </footer>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly person = PERSON;
  readonly smooth = inject(SmoothScrollService);
  readonly year = new Date().getFullYear();
}

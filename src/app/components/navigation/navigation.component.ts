import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothScrollService } from '../../services/smooth-scroll.service';
import { NAV_LINKS, PERSON } from '../../data/portfolio.data';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="nav" [class.is-scrolled]="scrollY() > 40">
      <a class="nav__brand" (click)="smooth.scrollTo('hero')" aria-label="Back to top">
        <!-- Logo slot: replace .nav__brand-mark content or add <img> here -->
        <span class="nav__brand-mark">{{ person.initials }}</span>
        <span class="nav__brand-text">{{ person.firstName }} <em>{{ person.lastName }}</em></span>
      </a>

      <nav class="nav__links" aria-label="Portfolio sections">
        @for (link of links; track link.target) {
          <a
            class="nav__link"
            [class.is-active]="activeSection() === link.target"
            (click)="smooth.scrollTo(link.target)"
          >
            {{ link.label }}
          </a>
        }
      </nav>

      <a class="nav__cta" [href]="person.links.email">
        Contact
        <span class="nav__cta-dot" aria-hidden="true"></span>
      </a>
    </header>

    <div class="nav-progress" [style.width.%]="progress() * 100" aria-hidden="true"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  readonly smooth = inject(SmoothScrollService);
  readonly scrollY = this.smooth.scrollY;
  readonly progress = this.smooth.progress;
  readonly activeSection = this.smooth.activeSection;
  readonly links = NAV_LINKS;
  readonly person = PERSON;
}

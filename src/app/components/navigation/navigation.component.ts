import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothScrollService } from '../../services/smooth-scroll.service';
import { NAV_LINKS, PERSON } from '../../data/portfolio.data';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="nav" [class.is-scrolled]="scrollY() > 60">
      <a class="nav__brand" (click)="smooth.scrollTo('hero')" data-cursor="hover" data-cursor-label="Top">
        <span class="nav__brand-mark">{{ person.initials }}</span>
        <span class="nav__brand-text">{{ person.firstName }}<em>{{ person.lastName }}</em></span>
      </a>

      <nav class="nav__links">
        @for (link of links; track link.target) {
          <a
            class="nav__link"
            [class.is-active]="activeSection() === link.target"
            (click)="smooth.scrollTo(link.target)"
            data-cursor="hover"
          >
            <span class="nav__link-idx">{{ link.index }}</span>
            <span class="nav__link-label">{{ link.label }}</span>
          </a>
        }
      </nav>

      <a
        class="nav__cta"
        [href]="person.links.email"
        data-cursor="hover"
        data-cursor-label="Mail"
      >
        <span>Get in touch</span>
        <span class="nav__cta-dot"></span>
      </a>
    </header>

    <div class="nav-progress" [style.width.%]="progress() * 100"></div>
  `,
  styles: [
    `
      .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 5vw;
        transition: padding 0.5s var(--ease-cinematic);
      }
      .nav.is-scrolled {
        padding: 16px 5vw;
      }
      .nav__brand {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: none;
      }
      .nav__brand-mark {
        width: 38px;
        height: 38px;
        display: grid;
        place-items: center;
        font-family: var(--font-mono);
        font-size: 11px;
        letter-spacing: 0.08em;
        color: var(--accent);
        border: 1px solid var(--line-strong);
        border-radius: 50%;
        transition: all 0.5s var(--ease-cinematic);
      }
      .nav.is-scrolled .nav__brand-mark {
        background: var(--accent);
        color: var(--bg);
        border-color: var(--accent);
      }
      .nav__brand-text {
        font-family: var(--font-display);
        font-size: 18px;
        color: var(--ink);
        letter-spacing: -0.01em;
      }
      .nav__brand-text em {
        font-style: italic;
        color: var(--accent);
      }
      .nav__links {
        display: flex;
        gap: 4px;
        padding: 6px;
        background: var(--bg-glass);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--line);
        border-radius: 100px;
      }
      .nav__link {
        position: relative;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border-radius: 100px;
        cursor: none;
        transition: background 0.4s var(--ease-cinematic);
      }
      .nav__link-idx {
        font-family: var(--font-mono);
        font-size: 9px;
        color: var(--ink-faint);
        letter-spacing: 0.1em;
      }
      .nav__link-label {
        font-size: 13px;
        color: var(--ink-soft);
        transition: color 0.4s var(--ease-cinematic);
      }
      .nav__link:hover .nav__link-label,
      .nav__link.is-active .nav__link-label {
        color: var(--ink);
      }
      .nav__link.is-active {
        background: rgba(212, 165, 116, 0.12);
      }
      .nav__link.is-active .nav__link-idx {
        color: var(--accent);
      }
      .nav__cta {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        border: 1px solid var(--line-strong);
        border-radius: 100px;
        font-size: 13px;
        color: var(--ink-soft);
        cursor: none;
        transition: all 0.5s var(--ease-cinematic);
      }
      .nav__cta:hover {
        background: var(--accent);
        color: var(--bg);
        border-color: var(--accent);
      }
      .nav__cta-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #4ade80;
        box-shadow: 0 0 12px #4ade80;
      }
      .nav-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--accent-deep), var(--accent-bright));
        z-index: 1001;
        transition: width 0.1s linear;
      }
      @media (max-width: 900px) {
        .nav__links { display: none; }
        .nav__cta span:first-child { display: none; }
        .nav__cta { padding: 10px; }
      }
    `,
  ],
})
export class NavigationComponent {
  readonly smooth = inject(SmoothScrollService);
  readonly scrollY = this.smooth.scrollY;
  readonly progress = this.smooth.progress;
  readonly activeSection = this.smooth.activeSection;
  readonly links = NAV_LINKS;
  readonly person = PERSON;
}

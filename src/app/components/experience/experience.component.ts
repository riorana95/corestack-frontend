import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="experience" class="exp">
      <div class="container">
        <header class="section-head" appReveal="rise">
          <span class="label">03 — Trajectory</span>
          <h2 class="section-head__title display">
            Four years, <em>one company</em>, three promotions.
          </h2>
        </header>

        <div class="exp__list">
          @for (item of experience; track item.period; let i = $index) {
            <article class="exp__item" appReveal="rise" [delay]="i * 0.06">
              <div class="exp__index mono">0{{ i + 1 }}</div>
              <div class="exp__body surface">
                <div class="exp__head">
                  <span class="exp__period label">{{ item.period }}</span>
                  <h3 class="exp__role">{{ item.role }}</h3>
                  <p class="exp__company">
                    <span class="text-accent">{{ item.company }}</span> · {{ item.location }}
                  </p>
                </div>
                <p class="exp__highlight">{{ item.highlight }}</p>
                <ul class="exp__bullets">
                  @for (bullet of item.bullets; track bullet) {
                    <li>{{ bullet }}</li>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;
}

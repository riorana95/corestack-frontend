import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACHIEVEMENTS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="achievements" class="awards">
      <div class="container">
        <header class="section-head" appReveal="rise">
          <span class="label">06 — Recognition</span>
          <h2 class="section-head__title display">
            Awards that <em>meant</em> something.
          </h2>
        </header>

        <div class="awards__list">
          @for (award of achievements; track award.title; let i = $index) {
            <article
              class="award surface"
              [class.award--platinum]="award.weight === 'platinum'"
              [class.award--gold]="award.weight === 'gold'"
              [class.award--silver]="award.weight === 'silver'"
              appReveal="rise"
              [delay]="i * 0.07"
            >
              <div class="award__year label">{{ award.year }}</div>
              <div class="award__body">
                <h3 class="award__title">{{ award.title }}</h3>
                <p class="award__org">{{ award.org }}</p>
                <p class="award__desc">{{ award.description }}</p>
              </div>
              <div class="award__weight mono">{{ award.weight }}</div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  readonly achievements = ACHIEVEMENTS;
}

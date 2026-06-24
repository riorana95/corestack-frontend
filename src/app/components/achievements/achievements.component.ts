import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACHIEVEMENTS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, RevealDirective, MagneticDirective],
  template: `
    <section id="achievements" class="awards">
      <div class="container">
        <header class="section-head" appReveal="rise">
          <span class="label">06 — Recognition</span>
          <h2 class="section-head__title display">
            Awards that <em class="serif-italic text-accent">meant</em> something.
          </h2>
        </header>

        <div class="awards__list">
          @for (award of achievements; track award.title; let i = $index) {
            <article
              class="award glass"
              [class.award--platinum]="award.weight === 'platinum'"
              [class.award--gold]="award.weight === 'gold'"
              [class.award--silver]="award.weight === 'silver'"
              appReveal="rise"
              [delay]="i * 0.08"
              [appMagnetic]="0.15"
            >
              <div class="award__year">
                <span class="label">{{ award.year }}</span>
              </div>
              <div class="award__body">
                <h3 class="award__title">{{ award.title }}</h3>
                <p class="award__org">{{ award.org }}</p>
                <p class="award__desc">{{ award.description }}</p>
              </div>
              <div class="award__medal">
                <span class="award__medal-mark">
                  @switch (award.weight) {
                    @case ('platinum') { ◉ }
                    @case ('gold') { ◯ }
                    @default { ○ }
                  }
                </span>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  readonly achievements = ACHIEVEMENTS;
}

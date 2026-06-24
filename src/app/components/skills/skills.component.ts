import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective, TiltDirective],
  template: `
    <section id="skills" class="skills">
      <div class="container">
        <header class="section-head" appReveal="rise">
          <span class="label">05 — Stack</span>
          <h2 class="section-head__title display">
            The full <em class="serif-italic text-accent">arsenal</em>.
          </h2>
        </header>

        <div class="skills__grid">
          @for (group of skills; track group.category) {
            <article class="skills__group glass" [appTilt]="4" appReveal="scale" [delay]="$index * 0.08">
              <header class="skills__group-head">
                <span class="skills__icon">{{ group.icon }}</span>
                <h3 class="skills__category">{{ group.category }}</h3>
              </header>

              <ul class="skills__list">
                @for (skill of group.skills; track skill.name) {
                  <li class="skill">
                    <div class="skill__head">
                      <span class="skill__name">{{ skill.name }}</span>
                      <span class="skill__level mono">{{ skill.level }}</span>
                    </div>
                    <div class="skill__bar">
                      <span
                        class="skill__bar-fill"
                        [style.width.%]="skill.level"
                      ></span>
                    </div>
                  </li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly skills = SKILLS;
}

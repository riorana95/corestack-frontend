import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { AchievementsComponent } from '../../components/achievements/achievements.component';
import { ContactComponent } from '../../components/contact/contact.component';

/**
 * Portfolio landing page — section flow only.
 * Chrome lives in PortfolioLayout.
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    AchievementsComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-about />
    <app-experience />
    <app-projects />
    <app-skills />
    <app-achievements />
    <app-contact />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
        position: relative;
      }
    `,
  ],
})
export class Portfolio {}

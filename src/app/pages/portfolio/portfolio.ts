import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from '../../components/loader/loader.component';
import { CustomCursorComponent } from '../../components/custom-cursor/custom-cursor.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { AchievementsComponent } from '../../components/achievements/achievements.component';
import { ContactComponent } from '../../components/contact/contact.component';

/**
 * The portfolio landing page itself.
 *
 * Renders the 7 cinematic sections (hero / about / experience / projects /
 * skills / achievements / contact). Layout chrome (ambient layers, grain,
 * custom cursor, navigation, loader) is provided by `PortfolioLayout` —
 * this component only owns the section flow.
 *
 * Route: `/`
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    CustomCursorComponent,
    NavigationComponent,
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

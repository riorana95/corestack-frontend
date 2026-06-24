import {
  Component,
  signal,
  afterNextRender,
  inject,
  DestroyRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { LoaderComponent } from './components/loader/loader.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactComponent } from './components/contact/contact.component';
import { SmoothScrollService } from './services/smooth-scroll.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
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
    @if (loading()) {
      <app-loader (done)="onLoaderDone()" />
    }

    <app-custom-cursor />

    <div class="ambient" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>

    <app-navigation />

    <main [class.is-hidden]="loading()" [class.is-ready]="!loading()">
      <app-hero />
      <app-about />
      <app-experience />
      <app-projects />
      <app-skills />
      <app-achievements />
      <app-contact />
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
        overflow-x: clip;
      }
      main {
        opacity: 0;
        transition: opacity 1s var(--ease-cinematic);
      }
      main.is-ready {
        opacity: 1;
      }
      main.is-hidden {
        opacity: 0;
      }
    `,
  ],
})
export class AppComponent {
  private readonly smooth = inject(SmoothScrollService);
  private readonly destroyRef = inject(DestroyRef);

  readonly loading = signal(true);

  constructor() {
    // freeze scroll during loader
    afterNextRender(() => {
      this.smooth.stop();
      // safety: ensure body overflow hidden during loader
      document.body.style.overflow = 'hidden';
    });
  }

  onLoaderDone(): void {
    this.loading.set(false);
    this.smooth.start();
    document.body.style.overflow = '';
    // refresh ScrollTrigger after layout settles
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }
}

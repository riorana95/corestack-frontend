import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PROJECTS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="projects" class="proj">
      <div class="container">
        <header class="section-head" appReveal="rise">
          <span class="label">04 — Work</span>
          <h2 class="section-head__title display">Selected <em>work</em>.</h2>
          <p class="section-head__sub">
            Products on one shared platform — Angular 21, Spring Boot, PostgreSQL, JWT, Flyway.
          </p>
        </header>

        <div class="proj__grid">
          @for (project of projects; track project.title; let i = $index) {
            <article class="proj__card surface" appReveal="rise" [delay]="i * 0.07">
              <header class="proj__card-head">
                <span class="label">N° {{ project.index }}</span>
                <span class="proj__status" [attr.data-status]="project.status">
                  {{ project.status }}
                </span>
              </header>

              <h3 class="proj__title display">{{ project.title }}</h3>
              <p class="proj__tagline">{{ project.tagline }}</p>
              <p class="proj__desc">{{ project.description }}</p>

              <ul class="proj__highlights">
                @for (hl of project.highlights; track hl) {
                  <li>{{ hl }}</li>
                }
              </ul>

              <footer class="proj__foot">
                <div class="proj__stack">
                  @for (tech of project.stack; track tech) {
                    <span class="chip">{{ tech }}</span>
                  }
                </div>
                @if (project.title === 'Xora') {
                  <button class="btn btn--ghost" type="button" (click)="enterXora($event)">
                    View live
                  </button>
                }
              </footer>
            </article>
          }
        </div>

        <div class="proj__end" appReveal="rise">
          <p class="label">More in the works</p>
          <button class="btn btn--ghost" type="button" (click)="smooth.scrollTo('contact')">
            Discuss a project
          </button>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
  readonly smooth = inject(SmoothScrollService);
  private readonly router = inject(Router);

  enterXora(event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/xora']);
  }
}

import { CommonModule } from '@angular/common';

import {
  Component,
  OnInit,
  signal,
} from '@angular/core';

import { BACKEND_SECTIONS }
from '../data/backend/backend-sections.data';

import {
  DocSection,
} from '../models/doc.model';

import {
  DocsSidebar,
} from '../components/docs-sidebar/docs-sidebar';

import {
  DocsArticle,
} from '../components/docs-article/docs-article';

import {
  DocsLoaderService,
} from '../services/docs-loader.service';

import {
  ActivatedRoute,
} from '@angular/router';

import {  DocsSearch } from '../components/docs-search/docs-search';

import {
  ReadingProgress,
} from '../components/reading-progress/reading-progress';

import {
  DocsPagination,
} from '../components/docs-pagination/docs-pagination';

import {
  Router,
} from '@angular/router';

@Component({
  selector: 'app-backend-docs',

  standalone: true,

  imports: [
    CommonModule,
    DocsSidebar,
    DocsArticle,
    DocsSearch,
    ReadingProgress,
    DocsPagination,
  ],

  templateUrl: './backend-docs.html',

  styleUrl: './backend-docs.scss',
})
export class BackendDocs
implements OnInit {

  private observer?: IntersectionObserver;

  readonly sidebarSections =
    BACKEND_SECTIONS;

  readonly activeSectionId =
    signal('java-basics');

  readonly loadedSections =
    signal<DocSection[]>([]);

  readonly loading =
    signal(false);

constructor(
  private readonly docsLoader:
    DocsLoaderService,

  private readonly route:
    ActivatedRoute,
    private readonly router:
  Router,
) {}

 async ngOnInit(): Promise<void> {

  this.route.params.subscribe(
    async params => {

      const sectionId =
        params['section'];

      if (!sectionId) {
        return;
      }

      this.activeSectionId.set(
        sectionId
      );

      const exists =
        this.loadedSections()
          .some(
            section =>
              section.id === sectionId
          );

      if (!exists) {

        await this.loadSection(
          sectionId
        );
      }

      setTimeout(() => {

        document
          .getElementById(sectionId)
          ?.scrollIntoView({
            behavior: 'smooth',
          });

      });
    }
  );

  this.initializeScrollSpy();
}

async onNavigate(
  sectionId: string
): Promise<void> {

  const parent =
    BACKEND_SECTIONS.find(
      section =>
        section.children?.some(
          child =>
            child.id === sectionId
        )
    );

  if (!parent) {
    return;
  }

  await this.router.navigate([
  '/corestack/docs/backend',
  parent.id,
  sectionId,
]);
}

  private async loadSection(
    sectionId: string
  ): Promise<void> {

    this.loading.set(true);

    const section =
      await this.docsLoader
        .loadSection(sectionId);

    if (section) {

      this.loadedSections.update(
        sections => [
          ...sections,
          section,
        ]
      );
    }

    this.loading.set(false);
  }

  private initializeScrollSpy(): void {

  this.observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            this.activeSectionId.set(
              entry.target.id
            );
          }

        });

      },
      {
        threshold: 0.3,
      }
    );

  setTimeout(() => {

    const sections =
      document.querySelectorAll(
        '.docs-section'
      );

    sections.forEach(section => {
      this.observer?.observe(section);
    });

  });
}
}
import { CommonModule }
from '@angular/common';

import {
  Component,
  Input,
  computed,
} from '@angular/core';

import {
  Router,
} from '@angular/router';

import {
  BACKEND_SECTIONS,
} from '../../data/backend/backend-sections.data';

@Component({
  selector: 'app-docs-pagination',

  standalone: true,

  imports: [CommonModule],

  templateUrl:
    './docs-pagination.html',

  styleUrl:
    './docs-pagination.scss',
})
export class DocsPagination {

  @Input({ required: true })
  currentSectionId!: string;

  private readonly flatSections =
    BACKEND_SECTIONS.flatMap(
      section =>
        section.children ?? []
    );

  readonly currentIndex =
    computed(() => {

      return this.flatSections
        .findIndex(
          section =>
            section.id ===
            this.currentSectionId
        );
    });

  readonly previous =
    computed(() => {

      const index =
        this.currentIndex();

      if (index <= 0) {
        return null;
      }

      return this.flatSections[
        index - 1
      ];
    });

  readonly next =
    computed(() => {

      const index =
        this.currentIndex();

      if (
        index >=
        this.flatSections.length - 1
      ) {
        return null;
      }

      return this.flatSections[
        index + 1
      ];
    });

  constructor(
    private readonly router:
      Router
  ) {}

  navigate(
    sectionId: string
  ): void {

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

    this.router.navigate([
      '/backend',
      parent.id,
      sectionId,
    ]);
  }
}
import { CommonModule }
from '@angular/common';

import {
  Component,
  HostListener,
  computed,
  signal,
} from '@angular/core';

import {
  FormsModule,
} from '@angular/forms';

import {
  Router,
} from '@angular/router';

import {
  BACKEND_SEARCH_DATA,
} from '../../data/backend/backend-search.data';

@Component({
  selector: 'app-docs-search',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
  ],

  templateUrl: './docs-search.html',

  styleUrl: './docs-search.scss',
})
export class DocsSearch {

  readonly open =
    signal(false);

  readonly search =
    signal('');

  readonly results =
    computed(() => {

      const term =
        this.search()
          .trim()
          .toLowerCase();

      if (!term) {
        return [];
      }

      return BACKEND_SEARCH_DATA
        .filter(item => {

          return (
            item.title
              .toLowerCase()
              .includes(term)

            ||

            item.tags.some(tag =>
              tag
                .toLowerCase()
                .includes(term)
            )
          );

        })
        .slice(0, 10);
    });

  constructor(
    private readonly router:
      Router
  ) {}

  @HostListener(
    'window:keydown',
    ['$event']
  )
  onKeydown(
    event: KeyboardEvent
  ): void {

    if (
      (event.ctrlKey || event.metaKey)
      &&
      event.key === 'k'
    ) {

      event.preventDefault();

      this.open.update(v => !v);
    }

    if (
      event.key === 'Escape'
    ) {

      this.open.set(false);
    }
  }

  navigate(
    route: string
  ): void {

    this.router.navigateByUrl(
      route
    );

    this.open.set(false);

    this.search.set('');
  }
}
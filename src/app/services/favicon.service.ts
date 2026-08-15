import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

/**
 * Dynamically switches the favicon and document title based on the
 * active route surface:
 *
 *   /xora/*   →  X favicon (teal)  +  "Xora — …" title
 *   /*        →  R favicon (gold)  +  "Rio Rana — …" title
 */
@Injectable({ providedIn: 'root' })
export class FaviconService {
  private readonly titleService = inject(Title);
  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router);

  private currentSurface: 'portfolio' | 'xora' = 'portfolio';

  /**
   * Call once in the root component's constructor or ngOnInit.
   */
  init(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        const isXora = e.urlAfterRedirects.startsWith('/xora');
        const surface = isXora ? 'xora' : 'portfolio';

        if (surface !== this.currentSurface) {
          this.currentSurface = surface;
          this.setFavicon(isXora ? 'favicon-xora.svg' : 'favicon.svg');
        }

        // Set title based on route
        if (isXora) {
          if (e.urlAfterRedirects.includes('/login')) {
            this.titleService.setTitle('Xora — Sign In');
          } else {
            this.titleService.setTitle('Xora — Product Hub');
          }
        } else {
          this.titleService.setTitle('Rio Rana — Full-Stack Developer Portfolio');
        }
      });
  }

  private setFavicon(filename: string): void {
    const link = this.doc.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (link) {
      link.href = filename;
    }
  }
}

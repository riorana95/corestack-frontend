import { CommonModule }
from '@angular/common';

import {
  Component,
  HostListener,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-reading-progress',

  standalone: true,

  imports: [CommonModule],

  templateUrl:
    './reading-progress.html',

  styleUrl:
    './reading-progress.scss',
})
export class ReadingProgress {

  readonly progress =
    signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;

    const documentHeight = document.documentElement.scrollHeight;

    const windowHeight = window.innerHeight;

    const scrollableHeight = documentHeight - windowHeight;

    const progress = (scrollTop / scrollableHeight) * 100;

    this.progress.set(Math.min(progress, 100));
  }
}

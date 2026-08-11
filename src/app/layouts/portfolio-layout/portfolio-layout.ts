import {
  Component,
  signal,
  afterNextRender,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { LoaderComponent } from '../../components/loader/loader.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FloatingXoraCta } from '../../shared/components/floating-xora-cta/floating-xora-cta';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

/**
 * Public portfolio layout — lean chrome, no custom cursor / grain.
 */
@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoaderComponent,
    NavigationComponent,
    FloatingXoraCta,
  ],
  templateUrl: './portfolio-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './portfolio-layout.scss',
})
export class PortfolioLayout {
  private readonly smooth = inject(SmoothScrollService);
  readonly loading = signal(true);

  constructor() {
    afterNextRender(() => {
      this.smooth.stop();
    });
  }

  onLoaderDone(): void {
    this.loading.set(false);
    this.smooth.start();
  }
}

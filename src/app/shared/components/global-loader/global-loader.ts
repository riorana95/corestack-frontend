import { AsyncPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LoaderService } from '../../../service/loader.service';

@Component({
  selector: 'app-global-loader',

  standalone: true,

  imports: [AsyncPipe],

  templateUrl: './global-loader.html',

  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './global-loader.scss',
})
export class GlobalLoader {

  constructor(
    public loaderService: LoaderService
  ) {}

}
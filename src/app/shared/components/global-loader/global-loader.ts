import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

import { LoaderService } from '../../../service/loader.service';

@Component({
  selector: 'app-global-loader',

  standalone: true,

  imports: [AsyncPipe],

  templateUrl: './global-loader.html',

  styleUrl: './global-loader.scss',
})
export class GlobalLoader {

  constructor(
    public loaderService: LoaderService
  ) {}

}
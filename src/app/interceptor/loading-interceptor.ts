import {
  HttpInterceptorFn
} from '@angular/common/http';

import { inject } from '@angular/core';

import { finalize } from 'rxjs';

import { LoaderService } from '../service/loader.service';

export const loadingInterceptor: HttpInterceptorFn =
  (req, next) => {

    const loader = inject(LoaderService);

    loader.display(true);

    return next(req).pipe(

      finalize(() => {
        loader.display(false);
      })

    );
};
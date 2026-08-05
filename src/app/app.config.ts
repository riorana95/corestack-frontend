import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, withNoIncrementalHydration } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { loadingInterceptor } from './interceptor/loading-interceptor';
import { authInterceptor } from './core/auth/interceptors/auth.interceptor';
import { httpErrorInterceptor } from './core/xora-common/interceptors/http-error.interceptor';
import { GlobalErrorHandler } from './core/xora-common/handlers/global-error.handler';
import { provideMarkdown } from 'ngx-markdown';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideMarkdown(),
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(MatDialogModule),
    provideHttpClient(withFetch(), withInterceptors([
      authInterceptor,
      httpErrorInterceptor,
      loadingInterceptor,
    ])),
    provideRouter(routes),
    provideAnimations(),
    provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ]
};

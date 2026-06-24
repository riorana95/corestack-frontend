import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { loadingInterceptor } from './interceptor/loading-interceptor';
import { authInterceptor } from './core/auth/interceptors/auth.interceptor';
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
      loadingInterceptor,
    ])),
    provideRouter(routes), provideAnimations(), provideClientHydration(withEventReplay())
  ]
};

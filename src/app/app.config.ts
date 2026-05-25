import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { loadingInterceptor } from './interceptor/loading-interceptor';
import { authInterceptor } from './core/auth/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(MatDialogModule),
    provideHttpClient(withFetch(), withInterceptors([
      authInterceptor,
      loadingInterceptor,
    ])),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};

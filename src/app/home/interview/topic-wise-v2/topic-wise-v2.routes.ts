import { Routes }
from '@angular/router';

export const TOPIC_WISE_V2_ROUTES:
Routes = [

  {
    path: '',

    redirectTo:
      'backend/java/java-basics',

    pathMatch: 'full',
  },

  {
    path:
      'backend/:category/:section',

    loadComponent: () =>
      import(
        './pages/backend-docs'
      ).then(
        m => m.BackendDocs
      ),
  },

];
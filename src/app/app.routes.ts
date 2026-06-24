import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Interview } from './home/interview/interview-question/interview';
import { SectionDetailComponent } from './home/interview/section-detail-component/section-detail-component';
import { InterviewDashboard } from './home/interview/interview-dashboard';
import { TopicWise } from './home/interview/topic-wise/topic-wise';
import { Splitwise } from './home/splitwise/splitwise';
import { authGuard } from './core/auth/guards/auth.guard';
import { InterviewVault } from './home/interview/interview-vault/interview-vault';

/**
 * Route architecture
 * ------------------
 *
 * The app has two distinct surfaces, each with its own layout and visual
 * identity, connected by a single hand-off CTA in the portfolio's hero:
 *
 *   /                        → PortfolioLayout  (public, cinematic)
 *     └── ''                  → Portfolio page (hero/about/experience/…)
 *
 *   /corestack              → AuthLayout / CoreStackLayout (auth-gated)
 *     ├── login              → AuthLayout → Login page (no navbar)
 *     └── (everything else)  → CoreStackLayout → product child routes
 *         ├── ''               → Home (product dashboard cards)
 *         ├── interview-dashboard
 *         ├── interview
 *         ├── question-set
 *         ├── interview-topic-wise
 *         ├── interview-vault
 *         ├── docs             → lazy-loaded topic-wise-v2 routes
 *         └── splitwise
 *
 * The portfolio is fully public. Only `/corestack/*` (excluding login)
 * is guarded — unauthenticated users get redirected to
 * `/corestack/login?returnUrl=…` so deep links survive the auth flow.
 *
 * `**` falls back to the portfolio so unknown URLs don't 404 the SPA.
 */
export const routes: Routes = [
  // ---------- Public portfolio surface ----------
  {
    path: '',
    loadComponent: () =>
      import('./layouts/portfolio-layout/portfolio-layout').then(
        (m) => m.PortfolioLayout,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/portfolio/portfolio').then((m) => m.Portfolio),
      },
    ],
  },

  // ---------- Authenticated CoreStack surface ----------
  {
    path: 'corestack',
    children: [
      // Login: own minimal layout (no navbar), no auth guard
      {
        path: 'login',
        loadComponent: () =>
          import('./layouts/auth-layout/auth-layout').then((m) => m.AuthLayout),
        children: [
          { path: '', component: Login },
        ],
      },

      // Everything else under /corestack: guarded, CoreStack chrome
      {
        path: '',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./layouts/corestack-layout/corestack-layout').then(
            (m) => m.CoreStackLayout,
          ),
        children: [
          { path: '', component: Home },
          { path: 'interview-dashboard', component: InterviewDashboard },
          { path: 'interview', component: Interview },
          { path: 'question-set', component: SectionDetailComponent },
          { path: 'interview-topic-wise', component: TopicWise },
          { path: 'interview-vault', component: InterviewVault },
          {
            path: 'docs',
            loadChildren: () =>
              import(
                './home/interview/topic-wise-v2/topic-wise-v2.routes'
              ).then((m) => m.TOPIC_WISE_V2_ROUTES),
          },
          { path: 'splitwise', component: Splitwise },
        ],
      },
    ],
  },

  // ---------- Fallback ----------
  { path: '**', redirectTo: '' },
];

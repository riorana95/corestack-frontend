# Xora Frontend

Angular 21 frontend for the Xora platform — a multi-product full-stack
ecosystem. The app has two surfaces:

1. **Public portfolio** at `/` — cinematic scroll-choreographed landing page.
2. **Authenticated Xora workspace** at `/xora/*` — product dashboard with
   Interview Prep and Split Vise products.

Phase 1 status: Interview Prep (Live), Split Vise (Live), Ecommerce (hidden,
Phase 2). See `../docs/ARCHITECTURE.md` for the microservice split plan.

## Tech Stack

| Concern              | Choice                                            |
| -------------------- | ------------------------------------------------- |
| Framework            | Angular 21 (standalone components, Signals)       |
| Change detection     | OnPush throughout                                 |
| Server-side render   | Yes (`@angular/ssr`, Express server)              |
| State                | Angular Signals + a single RxJS BehaviorSubject   |
| HTTP                 | provideHttpClient(withFetch + 3 functional interceptors) |
| UI library           | Angular Material (MatDialog only) + Bootstrap grid |
| Rich text            | ngx-quill / Quill                                 |
| Markdown             | ngx-markdown + marked + prismjs + highlight.js    |
| Animations           | GSAP + ScrollTrigger, Lenis smooth scroll         |
| Auth                 | jwt-decode, Google Identity Services              |
| Testing              | Vitest + jsdom (Karma/Jasmine removed)            |
| Styling              | SCSS with design tokens (`--xo-*` system)         |

## Project Structure

```
src/app/
+-- app.ts / app.html / app.scss          # Root shell (loader + toast + outlet)
+-- app.config.ts                         # Providers (router, http, error handler)
+-- app.routes.ts                         # Route table (/ + /xora/*)
+-- core/
|   +-- auth/                             # SHARED: auth service, token storage,
|   |   +-- services/                     #   interceptor, guard, models
|   |   +-- interceptors/
|   |   +-- guards/
|   |   +-- models/
|   +-- xora-common/                      # SHARED: toast, http error interceptor,
|   |   +-- services/                     #   global error handler, toast-host
|   |   +-- interceptors/
|   |   +-- handlers/
|   |   +-- components/toast-host/
|   |   +-- models/
|   +-- expenses/                         # Split Vise services + models
|   +-- groups/                           # Split Vise services + models
|   +-- settlements/                      # Split Vise services + models
+-- shared/                               # SHARED UI components
|   +-- components/
|       +-- navbar/
|       +-- global-loader/
|       +-- background-effects/
|       +-- floating-xora-cta/
+-- layouts/
|   +-- xora-layout/                      # Auth'd product surface chrome
|   +-- auth-layout/                      # Login-only (no navbar)
|   +-- portfolio-layout/                 # Public portfolio chrome
+-- home/
|   +-- home.ts                           # Product dashboard cards
|   +-- interview/                        # Interview Prep product
|   |   +-- interview-dashboard.ts
|   |   +-- interview-question/
|   |   +-- section-detail-component/
|   |   +-- add-question/
|   |   +-- topic-wise/                   # Legacy
|   |   +-- topic-wise-v2/                # Docs surface (lazy-loaded)
|   |   +-- ai-prep/                      # AI mock interview / coach / generator
|   |   +-- interview-vault/
|   +-- splitwise/                        # Split Vise product
+-- login/                                # Login + register page
+-- pages/portfolio/                      # Public portfolio page (7 sections)
+-- components/                           # Portfolio-only components (legacy)
+-- directives/                           # Portfolio animations
+-- environments/
|   +-- environment.ts                    # Dev
|   +-- environment.prod.ts               # Prod
+-- data/                                 # Portfolio content
```

## Local Development Setup

### Prerequisites
- Node.js 20+
- npm 10+
- The Xora backend running locally (see `../xora-backend/README.md`)
- (Optional) The AI proxy running locally (see `../xora-ai-proxy/README.md`)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

The dev environment (`src/app/environments/environment.ts`) points at
`http://localhost:8080` for the API and `http://localhost:3001` for the AI
proxy by default. Edit it if your backend is on a different port.

### 3. Run the dev server

```bash
npm start
```

The app will be available at `http://localhost:4200`.

### 4. Build for production

```bash
npm run build
```

Output is in `dist/portfolio/` (the project name in `angular.json` is
`portfolio` for historical reasons — this will be renamed to `xora` in a
future cleanup pass).

### 5. Run tests

```bash
npm test
```

## Environment Variables

Angular CLI replaces `src/app/environments/environment.ts` with
`environment.prod.ts` at build time. There is no `.env` file — the values
are baked into the bundle.

```typescript
// environment.ts (dev)
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  aiProxyUrl: 'http://localhost:3001',
  googleClientId: 'YOUR_GOOGLE_CLIENT_ID',
};
```

For production deployments (Vercel), update `environment.prod.ts` with the
deployed API and AI proxy URLs, then `npm run build`.

## Routes Overview

### Public surface (no auth)

| Path | Component          | Description                       |
| ---- | ------------------ | --------------------------------- |
| `/`  | PortfolioLayout    | Hero / About / Experience / ...   |

### Authenticated surface (auth guard)

| Path                       | Component              | Description                       |
| -------------------------- | ---------------------- | --------------------------------- |
| `/xora/login`              | AuthLayout -> Login    | Login + register page             |
| `/xora`                    | XoraLayout -> Home     | Product dashboard cards           |
| `/xora/interview-dashboard`| InterviewDashboard     | Interview Prep entry              |
| `/xora/interview`          | Interview              | 3-tab workspace                   |
| `/xora/question-set`       | SectionDetailComponent | Filterable question feed          |
| `/xora/interview-topic-wise` | TopicWise            | Legacy topic viewer               |
| `/xora/interview-vault`    | InterviewVault         | Saved questions vault             |
| `/xora/docs/**`            | TopicWiseV2 (lazy)     | Backend interview docs            |
| `/xora/splitwise`          | Splitwise              | Split Vise product                |

## Auth & Error Handling

- **Token storage**: `localStorage` keys `xora_access_token`,
  `xora_refresh_token`, `xora_user` (SSR-safe).
- **Auth interceptor**: attaches `Authorization: Bearer <token>` to every
  request; on 401 (non-auth endpoints) attempts one refresh + retry.
- **HTTP error interceptor** (`core/xora-common/interceptors/`): catches
  every non-2xx, parses the backend `ApiErrorResponse` envelope, and shows
  a toast. Terminal 401s (refresh failed) clear the session and route to
  `/xora/login?returnUrl=...`.
- **Global error handler** (`core/xora-common/handlers/`): catches uncaught
  Angular zone errors and surfaces a generic toast (always logs full stack
  to console).
- **Toast service** (`core/xora-common/services/toast.service.ts`):
  dependency-free toast system rendered by `<app-toast-host>` mounted at
  the root.

## Design System

The authenticated Xora surface uses a scoped design-token system in
`src/styles/xora-tokens.scss`:

- **Token prefix**: `--xo-*` (e.g., `--xo-bg`, `--xo-accent`, `--xo-radius-md`)
- **Utility class prefix**: `.xo-*` (e.g., `.xo-label`, `.xo-mono`, `.xo-rise`)
- **Scope**: `.xora-shell` — tokens do not leak into the portfolio surface
- **Accent**: electric cyan `#22d3ee`
- **Typography**: Geist Sans (headings), system-ui (body), JetBrains Mono (code)

The portfolio surface keeps its own bronze-gold tokens in `src/styles.scss`.

## Phase 2 Roadmap

See `../docs/ARCHITECTURE.md` for the plan to split this frontend into two
separate Angular apps (`xora-interview-prep` and `xora-split-vise`) with
a shared `xora-common` Angular library.

## Notes

- Custom cursor & magnetic effects auto-disable on touch devices.
- `prefers-reduced-motion` is respected.
- SSR is enabled — the app renders on the server first, then hydrates.
- Keyboard arrows (up/down) trigger smooth section jumps on the portfolio.

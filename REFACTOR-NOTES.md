# CoreStack Frontend — Refactor Notes

## What changed

This refactor splits the app into two clearly separated surfaces with a
clean hand-off between them, and fixes the dual `app-root` selector
conflict that was preventing the portfolio from ever rendering.

### Surface 1 — Public portfolio (`/`)

- New layout: `src/app/layouts/portfolio-layout/portfolio-layout.ts`
  (absorbs the cinematic chrome that was in `AppComponent` — intro
  loader, custom cursor, ambient layers, film grain, navigation).
- New page: `src/app/pages/portfolio/portfolio.ts` — the 7 portfolio
  sections (hero/about/experience/projects/skills/achievements/contact).
  This is the renamed successor to `AppComponent`, with selector
  `app-portfolio` instead of `app-root`.
- No auth guard. Fully public.

### Surface 2 — Authenticated CoreStack (`/corestack/*`)

- New layout: `src/app/layouts/corestack-layout/corestack-layout.ts`
  — renamed successor to `AppShell`. Same markup, clearer name.
- New layout: `src/app/layouts/auth-layout/auth-layout.ts` — minimal,
  no navbar. Used by `/corestack/login` only. Fixes the bug where the
  CoreStack navbar (with logout) was visible on the login screen.
- Auth guard moved from "everything except `/`" to "only `/corestack/*`
  (excluding login)".

### Bootstrap shell

`src/app/app.ts` is now intentionally thin — just a global loader
overlay and a single top-level `<router-outlet>`. All chrome lives in
the layout components, wired up in `app.routes.ts` as nested route
groups.

## New URL map

```
/                                  → Portfolio (public)
/corestack                         → Dashboard cards (auth)
/corestack/login                   → Login (no navbar)
/corestack/interview-dashboard     → Interview QA entry (auth)
/corestack/interview               → Interview workspace (auth)
/corestack/question-set            → Section detail (auth)
/corestack/interview-topic-wise    → Legacy topic-wise view (auth)
/corestack/interview-vault         → Vault (auth)
/corestack/docs/...                → Topic-wise v2 docs (auth)
/corestack/splitwise               → Splitwise (auth)
**                                 → Redirects to /
```

## Hand-off CTAs

1. **Hero** (`/`) — secondary CTA renamed from "Start a conversation"
   to "Enter CoreStack". Calls `enterCoreStack()` which routes to
   `/corestack`. Auth guard handles the redirect to login if needed.
2. **Projects** (`/`, Projects section) — CoreStack is project #01.
   A "View live" button appears in that card's footer, also routing
   to `/corestack`.
3. **CoreStack navbar** — a "← Portfolio" pill next to the CS logo
   lets authenticated users hop back to the public surface.

## Deep-link survival

`authGuard` now preserves the original target URL as `?returnUrl=`:
unauthenticated users hitting `/corestack/interview-vault` get sent
to `/corestack/login?returnUrl=/corestack/interview-vault`, and
after a successful login `Login.resolveReturnUrl()` sends them
straight back. The `returnUrl` is sanitised to prevent open-redirect
abuse.

## Files touched

### New
- `src/app/layouts/portfolio-layout/{portfolio-layout.ts,.html,.scss}`
- `src/app/layouts/auth-layout/{auth-layout.ts,.html,.scss}`
- `src/app/layouts/corestack-layout/{corestack-layout.ts,.html,.scss}`
- `src/app/pages/portfolio/portfolio.ts`

### Modified
- `src/app/app.ts` — slim bootstrap shell
- `src/app/app.html` — `<app-global-loader/><router-outlet/>`
- `src/app/app.scss` — minimal
- `src/app/app.routes.ts` — nested route groups
- `src/app/core/auth/guards/auth.guard.ts` — redirect to
  `/corestack/login?returnUrl=…`
- `src/app/login/login.ts` — post-auth redirect to `/corestack`
  (or `returnUrl`), `ActivatedRoute` injected
- `src/app/core/auth/services/auth.service.ts` — `logout()` now
  navigates to `/`
- `src/app/shared/components/navbar/navbar.{ts,html,scss}` —
  `goHome()` → `/corestack`, new `goPortfolio()` + back-link pill
- `src/app/home/home.ts` — `routeTo()` prepends `/corestack/`
- `src/app/home/interview/interview-dashboard.ts` — same prefix
  logic, preserves `view` query param
- `src/app/home/interview/topic-wise-v2/pages/backend-docs.ts` —
  internal nav URL → `/corestack/docs/backend/…`
- `src/app/home/interview/topic-wise-v2/components/docs-pagination/docs-pagination.ts` —
  same URL fix (also fixes a pre-existing bug where it was using
  `/backend/…` instead of `/docs/backend/…`)
- `src/app/home/interview/topic-wise-v2/data/backend/backend-search.data.ts` —
  same URL fix on all 4 search entries
- `src/app/components/hero/hero.component.ts` — Enter CoreStack CTA,
  `Router` injected, `enterCoreStack()` method
- `src/app/components/projects/projects.component.ts` — View live
  CTA on the CoreStack card, `Router` injected, `enterCoreStack()`
- `src/app/components/projects/projects.component.scss` —
  `.proj__view-live` styles

### Removed
- `src/app/app.component.ts` — renamed to `pages/portfolio/portfolio.ts`
- `src/app/shared/layout/app-shell/` — renamed to
  `layouts/corestack-layout/`

## Spec files

The existing spec files for components whose class names or paths
changed were not updated. They will fail to compile if you run
`npm test` until you update them. They are:

- `src/app/shared/layout/app-shell/app-shell.spec.ts` — REMOVED
  (the directory was deleted; no stale spec remains)
- Other specs (`interview-dashboard.spec.ts`, `splitwise.spec.ts`,
  `navbar.spec.ts`, etc.) reference unchanged class names and
  should still compile, but tests that assert specific navigation
  paths (e.g. `navigate(['home'])`) will need updating to the new
  `/corestack` URLs.

## How to apply

1. Unzip this archive — it replaces your entire `corestack-frontend/`
   directory.
2. `npm install` (no dependency changes, but safe to refresh).
3. `npm start` — verify:
   - `/` shows the portfolio (cinematic, no navbar-on-login bug).
   - Click "Enter CoreStack" in the hero → bounces to
     `/corestack/login` if not authed, else dashboard.
   - CoreStack navbar shows "← Portfolio" pill.
   - Logout returns to `/`.
4. `npm run build` — should succeed. SSR config unchanged
   (`app.routes.server.ts` still uses `RenderMode.Client` for `**`).

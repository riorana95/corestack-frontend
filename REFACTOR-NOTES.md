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

## Round 3 — Premium CoreStack visual upgrade (Home + Interview)

### Design language
- **Direction:** Distinct product surface (Linear/Vercel/Raycast polish),
  not a match-the-portfolio direction. CoreStack keeps its own identity.
- **Accent:** Electric cyan (#22d3ee) on near-black (#08090d).
- **Typography:** Geist Sans (headings + body), JetBrains Mono (code/labels).
  Loaded via Google Fonts in `src/index.html`.
- **Motion:** Subtle entrance stagger (CSS-only, 60ms per item) + refined
  hover lifts. No GSAP on CoreStack — products should feel like products.
- **Icons:** Inline SVG line icons replace emojis on product cards.
- **Cursor:** Native cursor on CoreStack (custom cursor stays on portfolio).

### New design system
- `src/styles/corestack-tokens.scss` — all `--cs-*` tokens, scoped to
  `.corestack-shell` so they don't leak into the portfolio. Includes
  utility classes (`.cs-label`, `.cs-mono`, `.cs-rise`) and a CSS-only
  entrance animation keyframe.
- Imported globally in `src/styles.scss` via `@import` so the vars are
  available everywhere; the scoping is by `.corestack-shell` selector,
  not by file import.

### Files upgraded
- `src/app/layouts/corestack-layout/corestack-layout.scss` — refined
  shell background, cyan-tinted ambient gradient.
- `src/app/shared/components/background-effects/background-effects.scss`
  — cyan glows replace blue/purple.
- `src/app/shared/components/navbar/navbar.scss` — cyan logo gradient,
  refined glass, tighter spacing.
- `src/app/home/home.html` + `home.scss` — full premium rewrite:
  SVG line icons, status badges, entrance stagger, hover lift, accent
  corner glow.
- `src/app/home/interview/interview-dashboard.html` + `.scss` — same
  premium rewrite for the inner product picker.
- `src/app/home/interview/interview-question/interview.html` + `.scss`
  — restored workspace header (was commented out), view switcher
  becomes a segmented control, refined pagination with SVG arrows.
- `src/app/home/interview/interview-question/company-detail-component/`
  — refined company cards with index numbers, accent count badges,
  hover arrow chips.
- `src/app/home/interview/interview-question/question-card-component/`
  `.scss` — Linear-style left accent bar on hover/open, refined
  expand animation, better code block, smoother icon rotation.
- `src/app/home/interview/interview-vault/interview-vault.scss` —
  cyan accent, Geist Sans, refined sidebar + nav items.
- `src/app/home/interview/section-detail-component/section-filter/`
  `section-filter.scss` + `section-table/section-table.scss` + parent
  `section-detail-component.scss` — color swap from blue/indigo to
  cyan tokens. Structure unchanged.

### Files NOT touched (out of scope for this round)
- `src/app/home/splitwise/*` — explicitly out of scope. Still uses
  the old blue/indigo palette. Will look out-of-place next to the
  upgraded pages until it gets the same treatment.
- `src/app/home/interview/add-question/*` — modal dialog, rarely
  opened. Still uses blue/indigo. Lower priority.
- `src/app/home/interview/topic-wise/*` — legacy topic-wise view.
  Same situation.
- `src/app/home/interview/topic-wise-v2/*` — docs surface. Already
  has its own design language. Would need a separate pass.

### Verification
- Run `npm start` and visit:
  - `/corestack` — new dashboard with cyan accent, SVG icons,
    entrance stagger.
  - `/corestack/interview-dashboard` — inner product picker,
    same design language.
  - `/corestack/interview` — workspace with segmented control,
    company grid, question cards with left accent bar on hover.
  - `/corestack/interview-vault` — sidebar nav with cyan accents.
- Portfolio at `/` should be **unchanged** — bronze-gold, custom
  cursor, cinematic. The `.corestack-shell` scoping ensures the
  `--cs-*` tokens don't leak.

### Known visual debt
1. **Splitwise** still uses blue/indigo. Will look out-of-place.
2. **Add Question modal** still uses blue/indigo.
3. **Topic-wise (legacy)** still uses blue/indigo.
4. **Topic-wise-v2 docs** has its own design language — may want
   to align in a future pass.

Each of these is a self-contained refactor that can be done
independently when you're ready.

## Round 4 — Visual QA fixes (Company Interview, Question Explorer, Interview Vault)

### Issues identified from screenshots (VLM analysis)

**Company Interview page (2 issues):**
1. Segmented control buttons ("Company Interviews" vs "Question Explorer") had
   inconsistent visual width because text lengths differ and there was no
   equalization.
2. Company card head row (index "01" + count badge "2") looked unbalanced —
   plain text vs chip-style badge didn't share a clear baseline. "INTERVIEW
   TRACKS" label had low contrast against the dark card.

**Question Explorer page (1 issue):**
1. Section filter card still used old hardcoded `rgba(255,255,255,...)` colors
   instead of `--cs-*` tokens. Search button didn't align with selects
   because it had no label (flex `align-items: stretch` caused misalignment).
   Expanded question content (Quill HTML in `rich-content` div) had
   inconsistent bullet/paragraph indentation — no styling was applied to it.

**Interview Vault spacing:**
1. Sidebar toggle buttons (Backend/Frontend/All) used `flex-wrap` with
   `min-width: calc(50% - 4px)` which caused the third button to wrap
   awkwardly to a second row.
2. Nav items had tight padding (9px 12px) — felt cramped.
3. Question list `<li>` items had no spacing between them — ran together.
   The `<ol>` in the HTML was missing the `question-list` class entirely,
   so the SCSS rules never applied.

### Fixes applied

**`interview.scss`**
- Segmented control buttons: added `flex: 1`, `min-width: 160px`,
  `text-align: center`, `white-space: nowrap` so both buttons are
  equal-width regardless of text length.
- Tightened header gap from 10px to 8px.

**`company-detail-component.scss`**
- Card head: added `min-height: 24px` so index and count badge share
  a clear baseline. Added `line-height: 1` to both.
- "INTERVIEW TRACKS" label: bumped from `--cs-ink-muted` to
  `--cs-ink-soft` for better contrast.
- Count badge: tightened `min-width` from 28px to 24px.

**`section-filter.scss`** — full premium rewrite
- Replaced all hardcoded `rgba(255,255,255,...)` with `--cs-*` tokens.
- Changed `align-items: stretch` to `align-items: flex-end` so the
  Search button (which has no label) aligns with the select baselines.
- Added `flex: 1` and `min-width: 160px` to filter groups so they
  share width evenly.
- Refined selects: `--cs-bg-elevated` background, cyan focus ring,
  consistent 38px height, custom dropdown arrow with muted ink color.
- Search button: cyan gradient, 38px height to match selects.

**`interview-vault.scss`**
- Toggle buttons: replaced `flex-wrap` + `min-width: calc(50% - 4px)`
  with `display: grid; grid-template-columns: repeat(3, 1fr)` so all
  three buttons sit on one row at equal width. Added `text-align: center`
  and `white-space: nowrap`.
- Nav items: increased padding from 9px to 10px, added `line-height: 1.4`.
- Question list items: added `padding: 6px 0` and a subtle
  `border-top: 1px solid var(--cs-border)` between items so they
  don't run together.

**`interview-vault.html`**
- Added `class="question-list"` to the `<ol>` so the SCSS rules
  actually apply (was missing entirely).

**`question-card-component.scss`** — added `.rich-content` styling
- Normalizes Quill HTML: `p`, `h3/h4`, `ul/ol/li`, `strong/em`,
  `code`, `pre`, `blockquote` all get consistent margins, padding,
  indentation, and color tokens. Fixes the bullet-point indentation
  issue in expanded question content.

**`section-table.scss`** — added same `.rich-content` styling
- The Question Explorer's expanded rows also render Quill HTML via
  a `rich-content` div. Added the same normalization rules so both
  surfaces render rich content consistently.
- Bumped table header background from `--cs-border` to
  `--cs-surface-hover` so the header row reads as distinct.

## Round 5 — Splitwise + Add Question modal + Topic-wise legacy upgrade

### What changed
All three remaining CoreStack surfaces migrated to the `--cs-*` design
system. Zero blue/indigo references remain across the entire CoreStack
surface — every page now uses the cyan accent, Geist Sans, and the
unified radius/spacing scale.

### Files upgraded

**`src/app/home/splitwise/splitwise.scss`** — full premium rewrite
- All `--sw-*` token definitions now map to `--cs-*` values (e.g.
  `--sw-primary: var(--cs-accent)`, `--sw-bg: var(--cs-surface)`).
  This preserves the existing class structure while pulling in the
  new design system.
- Title: Geist Sans display font, 600 weight, tightened letter-spacing.
- Section titles: Geist Sans, refined size hierarchy.
- Labels: JetBrains Mono, uppercase, 0.12em tracking.
- Buttons: cyan gradient primary, refined ghost/text variants.
- Inputs/selects: `--cs-bg-elevated` background, cyan focus ring.
- Group items: cyan-soft active state, refined hover.
- Balance rows: monospace amounts, cyan positive / red negative.
- Settlement status badges: token-based semantic colors with borders.
- Member avatar chips: cyan-soft with border.
- Expense cards: monospace amounts in cyan-bright.
- Search items: cyan-soft hover.
- Chip-check (participant selection): cyan-soft when checked.

**`src/app/home/interview/add-question/add-question.scss`** — full premium rewrite
- Container: `--cs-bg-elevated` background, `--cs-radius-lg`, refined shadow.
- Header: Geist Sans 600 title, refined close button (surface bg, subtle
  border, hover state instead of gradient).
- Form labels: JetBrains Mono, uppercase, 0.1em tracking.
- Inputs/textarea: `--cs-bg` background, cyan focus ring, consistent
  radius.
- Select: custom cyan-tinted dropdown arrow, dark option styling.
- Save button: cyan gradient with accent shadow.
- Cancel button: surface ghost style.
- Tag chips: surface default, cyan-soft on hover, cyan-filled when
  selected — consistent with the chip language across CoreStack.
- **Quill editor overrides**: added `::ng-deep` rules to theme the
  Quill `.ql-snow` toolbar/editor to match the CoreStack dark theme
  (toolbar surface bg, editor dark bg, cyan active states on
  toolbar buttons). Previously the Quill editor rendered with its
  default white snow theme, clashing with the dark modal.
- Mobile: form-grid collapses to 1 column, action buttons stack
  vertically.

**`src/app/home/interview/topic-wise/topic-wise.scss`** — full premium rewrite
- All hardcoded `rgba(15, 23, 42, ...)` / `rgba(30, 41, 59, ...)` /
  `rgba(148, 163, 184, ...)` colors replaced with `--cs-*` tokens.
- Header: Geist Sans title, cyan eyebrow, cyan-soft stats card with
  accent border.
- Area tabs: surface default, cyan-soft active with accent shadow.
- Topic nav (sidebar): sticky, refined panel-title with mono small.
- Topic buttons: surface default, cyan-soft active.
- Question rows: surface default, cyan-soft active, mono small meta.
- Difficulty/answer tabs: pill-shaped, cyan-soft active.
- Answer body: `--cs-bg-elevated` background, monospace code in
  cyan-bright.
- Tag list: cyan-soft pills with accent border (matches question-card
  tag styling).
- Empty states: surface bg with dashed border-strong.
- Filters: monospace labels, cyan focus ring on search input.

### Verification
- `grep` confirms zero remaining `#6366f1`, `#818cf8`, `#9333ea`,
  `#4f46e5`, `#7c3aed`, `rgba(99,102,241,...)`, `rgba(147,51,234,...)`,
  or `rgba(79,70,229,...)` references across the entire
  `src/app/home/` tree.
- Topic-wise-v2 docs area also clean — no blue/indigo refs.

### Visual consistency check
Every CoreStack page now shares:
- Cyan accent (`--cs-accent: #22d3ee`)
- Geist Sans display + body, JetBrains Mono for labels/meta
- Same radius scale (`--cs-radius-sm/md/lg/pill`)
- Same surface/border tokens
- Same entrance animation pattern (`cs-rise` where applicable)
- Same hover language (surface-hover bg + border-strong)

The only surface NOT yet aligned is the topic-wise-v2 docs area,
which has its own docs-style design language (sidebar + article
reading layout). That's a deliberate choice — docs surfaces
typically warrant their own typography and reading rhythm.

## Round 6 — AI Interview Prep feature

### What was built
A full AI-powered interview prep feature with three modes (Mock Interview,
Answer Coach, Question Generator), integrated as a new tab in the existing
Interview Workspace. Powered by a separate Node.js/Express AI proxy that
calls Z.ai's GLM-4.6 model.

### Architecture
```
Angular frontend (CoreStack)
   │
   ├── POST /api/ai/mock-interview/start
   ├── POST /api/ai/mock-interview/answer
   ├── POST /api/ai/mock-interview/results
   ├── POST /api/ai/answer-coach/evaluate
   ├── POST /api/ai/question-generator
   │
   ▼
Node.js Express AI proxy (ai-proxy/, separate folder)
   │
   ├── Calls Z.ai GLM-4.6 via z-ai-web-dev-sdk
   ├── Holds the API key (frontend never sees it)
   ├── Structured prompts per endpoint (prompts.js)
   ├── Returns JSON the Angular service consumes
   │
   ▼
Z.ai GLM-4.6
```

### New files

**AI Proxy microservice (separate folder, deploy independently):**
- `ai-proxy/package.json` — Express + cors + z-ai-web-dev-sdk
- `ai-proxy/server.js` — 5 endpoints + health check, lazy ZAI client
- `ai-proxy/prompts.js` — system prompts per endpoint (engineered to
  return pure JSON)
- `ai-proxy/.env.example` — ZAI_API_KEY, PORT, CORESTACK_API_URL
- `ai-proxy/README.md` — setup, deploy, and integration docs

**Angular frontend (paste into corestack-frontend):**
- `src/app/home/interview/ai-prep/ai-prep.models.ts` — TypeScript
  interfaces matching the proxy's JSON contract + option lists
- `src/app/home/interview/ai-prep/ai-prep.service.ts` — HTTP client
  for all 5 proxy endpoints
- `src/app/home/interview/ai-prep/ai-prep.{ts,html,scss}` — container
  with 3-tab switcher (Mock Interview / Answer Coach / Question Generator)
- `src/app/home/interview/ai-prep/mock-interview/` — 3-screen flow:
  - Setup: role, skills, difficulty, count, source (hybrid/bank/AI)
  - Interview: chat-style Q&A, progress bar, live evaluation feedback
  - Results: overall score, strengths, weak areas, recommendations,
    per-question breakdown, "practice weak areas" button
- `src/app/home/interview/ai-prep/answer-coach/` — two-column layout
  (input left, AI feedback right), standalone answer evaluation
- `src/app/home/interview/ai-prep/question-generator/` — topic chips +
  difficulty + count → AI generates expandable question cards

### Modified files
- `src/app/environments/environment.ts` — added `aiProxyUrl`
- `src/app/home/interview/interview-question/interview.ts` — added
  `'ai-prep'` to the `activeView` union, imported `AiPrep` component
- `src/app/home/interview/interview-question/interview.html` — added
  third tab button "AI Prep" + the `<app-ai-prep>` view block
- `src/app/home/interview/interview-question/interview.scss` —
  segmented control now scrollable on mobile (3 tabs don't fit)

### How to run

1. **Start the AI proxy:**
   ```bash
   cd ai-proxy
   npm install
   npm start
   # Listens on http://localhost:3001
   ```

2. **Start the Angular frontend** (as usual):
   ```bash
   cd corestack-frontend
   npm start
   # Visit http://localhost:4200/corestack/interview
   # Click the "AI Prep" tab
   ```

3. **Use the feature:**
   - Mock Interview: pick role + skills + difficulty + count → click
     "Start mock interview" → AI asks first question → type answer →
     submit → AI evaluates + asks next → after last question, results
     screen with score + weak areas.
   - Answer Coach: type/paste a question + your answer → click
     "Evaluate answer" → AI returns score + 3-bullet feedback + model
     answer + tip.
   - Question Generator: pick topic + difficulty + count → click
     "Generate questions" → AI returns expandable question cards with
     model answers.

### Verified working
All 5 proxy endpoints tested end-to-end with real GLM-4.6 calls:
- `POST /api/ai/question-generator` — returned 2 questions with answers
- `POST /api/ai/mock-interview/start` — returned first question + session ID
- `POST /api/ai/answer-coach/evaluate` — returned score 60, structured
  feedback, model answer, tip (for a deliberately weak answer about
  JPA N+1 problem)

### Design system
All AI Prep components use the same `--cs-*` tokens as the rest of
CoreStack — cyan accent, Geist Sans, JetBrains Mono for labels/meta,
refined glass surfaces. Visually consistent with the existing
interview workspace.

### Production notes
- The AI proxy is stateless — session context (transcript, question
  bank subset) is passed from the frontend on each call. Horizontally
  scalable with no session storage.
- For production: deploy the proxy to any Node.js host (Vercel,
  Railway, Render), set `ZAI_API_KEY` as an env var, point
  `environment.aiProxyUrl` at the deployed URL.
- Optional: add JWT validation to the proxy by having it call your
  Spring Boot backend to verify tokens. For v1, the proxy is open —
  secure it behind your existing auth interceptor or add rate limiting.

## Round 7 — Switch AI provider to Cloudflare Workers AI (FREE)

### What changed
The AI proxy now supports **two providers**, with Cloudflare Workers
AI as the recommended default (free tier — 10k neurons/day, no credit
card needed). Z.ai is still supported for backward compatibility.

### Why Cloudflare over Z.ai
- **Genuinely free tier** — 10,000 neurons per day at no cost
- **No credit card required** to start
- Multiple strong models (llama-3.3-70b, kimi-k2.6, qwen2.5-coder)
- OpenAI-compatible response format
- Runs on Cloudflare's edge network (fast)
- Z.ai required paid credits even for basic testing

### Provider architecture
The proxy is now provider-agnostic. `server.js` defines a `CloudflareProvider`
class and a `ZaiProvider` class. A factory function picks one based on env
vars:

- If `AI_PROVIDER=cloudflare` (or auto-detected when CLOUDFLARE_* vars set):
  uses Cloudflare via direct REST calls (no SDK needed)
- If `AI_PROVIDER=zai` (or auto-detected when ZAI_* vars set): uses Z.ai
  via the `z-ai-web-dev-sdk` package (now an optional dependency)

Both providers implement the same `chat(systemPrompt, userMessage)`
interface, so the rest of the proxy (prompts, JSON extraction, endpoints)
is unchanged.

### Files modified

**`ai-proxy/server.js`** — full rewrite
- Added `CloudflareProvider` class — direct REST calls to
  `https://api.cloudflare.com/client/v4/accounts/{id}/ai/run/{model}`,
  no SDK needed
- Refactored `ZaiProvider` to use dynamic `import('z-ai-web-dev-sdk')`
  so Cloudflare-only deployments don't need the package installed
- Added `getProvider()` factory with auto-detection
- Renamed `callGlm()` → `callAI()` (provider-agnostic)
- Added process-level error handlers (`unhandledRejection`,
  `uncaughtException`) so the proxy never crashes silently
- Health endpoint now reports active provider + model
- Clear error messages for each provider's common failures

**`ai-proxy/package.json`**
- Bumped version to 1.1.0
- Moved `z-ai-web-dev-sdk` to `optionalDependencies` (Cloudflare-only
  users don't need it)

**`ai-proxy/.env.example`** — full rewrite
- Documents both providers with clear "OPTION A (FREE)" / "OPTION B" sections
- Placeholders only (no real tokens)

**`ai-proxy/README.md`** — full rewrite
- Quick start focuses on Cloudflare (free) setup
- Comparison table of providers
- Model selection guide
- Troubleshooting section covers both providers

### Verified working end-to-end (with Cloudflare)
All 5 endpoints tested with real Cloudflare calls using
`@cf/meta/llama-3.3-70b-instruct-fp8-fast`:

1. **Question Generator** — generated 1 Java question with answer + tags ✓
2. **Mock Interview Start** — returned session ID + first question
   ("Can you explain the concept of encapsulation in Java...") ✓
3. **Mock Interview Answer** — evaluated answer (score 90/100), returned
   next question ("What is the difference between == and .equals()...") ✓
4. **Mock Interview Results** — generated final summary (overall 85/100,
   3 strengths, 3 weak areas, 3 recommendations) ✓
5. **Answer Coach** — scored weak HashMap answer 80/100 with feedback ✓

### How to run (Cloudflare — free)

```bash
cd ai-proxy
npm install

# Create .env with your Cloudflare creds
cat > .env << 'EOF'
AI_PROVIDER=cloudflare
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here

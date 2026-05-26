# CoreStack Frontend

Angular frontend for CoreStack. This app provides the user interface for authentication, the Interview preparation product, and the Splitwise-style expense sharing product.

## Frontend Products

| Product | Main Folder | Documentation |
| --- | --- | --- |
| Interview | `src/app/home/interview` | [docs/INTERVIEW.md](docs/INTERVIEW.md) |
| Splitwise | `src/app/home/splitwise` and `src/app/core/*` | [docs/SPLITWISE.md](docs/SPLITWISE.md) |

## Tech Stack

- Angular 21
- Angular Material
- Bootstrap 5
- RxJS
- TypeScript
- Vitest
- Angular SSR support
- ngx-quill / Quill

## Project Structure

```text
src/app/
+-- core/
|   +-- auth/           # Auth services, token storage, auth guard, interceptor
|   +-- expenses/       # Splitwise expense models and API service
|   +-- groups/         # Splitwise group models and API service
|   +-- settlements/    # Splitwise settlement models and API service
+-- home/
|   +-- interview/      # Interview dashboard, sections, companies, questions
|   +-- splitwise/      # Main Splitwise UI
+-- login/              # Login and registration screen
+-- shared/             # Shared layout and UI components
+-- environments/       # API URL configuration
```

## Prerequisites

- Node.js compatible with Angular 21
- npm 11 or newer

## Install Dependencies

```powershell
npm install
```

## Configure API URL

Update:

```text
src/app/environments/environment.ts
```

Local backend:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
};
```

Deployed backend:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://your-backend-domain.com',
};
```

## Run Frontend

```powershell
npm start
```

Open:

```text
http://localhost:4200
```

## Build

```powershell
npm run build
```

Build output:

```text
dist/
```

## Test

```powershell
npm test
```

## Run SSR Server

After building:

```powershell
npm run serve:ssr:app1
```

## Main Routes

| Route | Description |
| --- | --- |
| `/` | Login and registration |
| `/home` | Main dashboard |
| `/interview-dashboard` | Interview product dashboard |
| `/interview` | Interview question view |
| `/question-set` | Section-based question view |
| `/splitwise` | Splitwise expense sharing product |

Protected routes use `authGuard` and require a valid login.

## Deployment Notes

- `vercel.json` is included for Vercel deployment.
- Confirm the production `apiUrl` before building.
- Confirm backend CORS includes the deployed frontend URL.
- Run `npm run build` before deployment.
- Do not commit environment files with secrets.

# Splitwise Frontend

Angular UI for group expense sharing. This product uses the backend `/api/v1` APIs for authentication, groups, expenses, balances, debts, and settlements.

## Location

```text
app1/src/app/home/splitwise/
```

Shared product services and models are under:

```text
app1/src/app/core/
```

## Structure

```text
src/app/
+-- core/auth/           # AuthService, token storage, auth guard, interceptor
+-- core/groups/         # GroupService and group models
+-- core/expenses/       # ExpenseService and expense models
+-- core/settlements/    # SettlementService and settlement models
+-- home/splitwise/      # Splitwise screen
+-- login/               # Login and registration used by Splitwise auth APIs
```

## Main Route

| Route | Component | Purpose |
| --- | --- | --- |
| `/splitwise` | `Splitwise` | Manage groups, expenses, balances, and settlements |

## Backend Integration

The API base URL comes from:

```text
src/app/environments/environment.ts
```

Splitwise API services:

| Service | Backend Routes |
| --- | --- |
| `AuthService` | `/api/v1/auth/**` |
| `GroupService` | `/api/v1/groups/**` |
| `ExpenseService` | `/api/v1/groups/{groupId}/expenses`, `/api/v1/groups/{groupId}/balances` |
| `SettlementService` | `/api/v1/groups/{groupId}/debts`, `/api/v1/groups/{groupId}/settlements/**` |

## Typical User Flow

1. Register or log in.
2. Open the Splitwise route.
3. Create a group.
4. Add members by email.
5. Add an expense with equal, exact, or percentage split.
6. Review balances and simplified debts.
7. Record and complete settlements.

## Auth Behavior

- Access and refresh tokens are stored by `TokenStorageService`.
- `authInterceptor` attaches the Bearer token to API calls.
- On `401`, the frontend attempts token refresh once.
- Protected routes use `authGuard`.
- Google Sign-In renders through Google Identity Services and exchanges the credential with `/api/v1/auth/google`.

## Related Full Module Docs

The complete Splitwise architecture, database, backend APIs, and flow documentation is in:

```text
../../SPLITWISE.md
```

## Notes

- Keep frontend models aligned with backend DTOs.
- Keep `environment.apiUrl` aligned with the backend URL.
- Backend CORS must include the frontend origin.
- Use the root Splitwise documentation for database and API contract details.

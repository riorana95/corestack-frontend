# Interview Frontend

Angular UI for interview preparation. This product lets users browse companies, view question sections, open company-specific questions, and add or update interview questions.

## Location

```text
app1/src/app/home/interview/
```

## Structure

```text
home/interview/
+-- interview-dashboard.*             # Interview landing/dashboard view
+-- add-question/                     # Add and update question form/service
+-- interview-question/               # Company and question browsing
+-- section-detail-component/         # Section detail, filters, table
```

## Main Screens

| Route | Component | Purpose |
| --- | --- | --- |
| `/interview-dashboard` | `InterviewDashboard` | Interview product dashboard |
| `/interview` | `Interview` | Company and question view |
| `/question-set` | `SectionDetailComponent` | Section-based question list |

## Backend Integration

The API base URL comes from:

```text
src/app/environments/environment.ts
```

Current Interview service calls:

| Service | Method | Backend Endpoint |
| --- | --- | --- |
| `InterviewService` | `getAllCompany()` | `GET /company` |
| `InterviewService` | `getQuestionByCompanyId(id)` | `GET /questionBy?companyId={id}` |
| `AddQuestionService` | `addQuestion(data)` | `POST /question` |
| `AddQuestionService` | `UpdateQuestion(data)` | `PUT /question/{id}` |

## Local JSON Data

Some interview content is also loaded locally:

```text
home/interview/interview-question/interviewQA.json
home/interview/interview-question/sectionQuestions.json
```

These files support local section/company views and can be replaced or expanded as backend APIs mature.

## Typical User Flow

1. User logs in.
2. User opens the Interview dashboard.
3. User selects a company or section.
4. Angular loads questions from the backend or local JSON config.
5. User can add or update questions through the add-question UI.

## Related Backend Docs

```text
../../corestack-backend/docs/INTERVIEW.md
```

## Notes

- Interview routes are protected by `authGuard`.
- The backend Interview endpoints currently do not use `/api/v1`.
- Keep the environment `apiUrl` aligned with the backend host.
- If route names change, update both `app.routes.ts` and this README.

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { signal } from '@angular/core';
import { environment } from '../../../environments/environment';

/**
 * InterviewService — talks to the Xora Interview Prep backend
 * (/api/v1/interview/**). All HTTP errors are surfaced globally by the
 * httpErrorInterceptor + ToastService; this service just returns the
 * streams and lets the caller decide what to do with the data.
 */
@Injectable({ providedIn: 'root' })
export class InterviewService {
  private readonly baseUrl = `${environment.apiUrl}/api/v1/interview`;
  private readonly http = inject(HttpClient);

  /** Latest question batch (signal-friendly for template use). */
  readonly questions = signal<any[]>([]);

  /** Questions for a single company. */
  getQuestionByCompanyId(companyId: string | number) {
    return this.http.get(`${this.baseUrl}/questions/by-company?companyId=${companyId}`);
  }

  /** All companies (lightweight list for dropdowns). */
  getAllCompanies() {
    return this.http.get(`${this.baseUrl}/companies`);
  }

  /** @deprecated use {@link getAllCompanies} — kept for backward compat. */
  getAllCompany() {
    return this.getAllCompanies();
  }
}

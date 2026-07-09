import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

/**
 * AddQuestionService — used by the Add Question modal to create new
 * questions and companies in the Interview Prep backend.
 *
 * Routes through `/api/v1/interview`. Errors are surfaced globally by the
 * httpErrorInterceptor + ToastService.
 */
@Injectable({ providedIn: 'root' })
export class AddQuestionService {
  private readonly apiUrl = `${environment.apiUrl}/api/v1/interview`;
  private readonly http = inject(HttpClient);

  addQuestion(data: unknown) {
    return this.http.post(`${this.apiUrl}/questions`, data);
  }

  addCompany(data: unknown) {
    return this.http.post(`${this.apiUrl}/companies`, data);
  }

  updateQuestion(id: number | string, data: unknown) {
    return this.http.put(`${this.apiUrl}/questions/${id}`, data);
  }
}

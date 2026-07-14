import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

/**
 * Section — paginated/filterable question feed for the Interview Prep explorer.
 * Routes through /api/v1/interview.
 */
@Injectable({ providedIn: 'root' })
export class Section {
  private readonly apiUrl = `${environment.apiUrl}/api/v1/interview`;
  private readonly http = inject(HttpClient);

  /** Filtered + paginated question feed. */
  getFilteredQA(req: {
    companyName: string;
    tag: string;
    currentPage: number;
    pageSize: number;
  }) {
    const params = `companyName=${encodeURIComponent(req.companyName)}&tag=${encodeURIComponent(req.tag)}&page=${req.currentPage}&size=${req.pageSize}`;
    return this.http.get(`${this.apiUrl}/questions?${params}`);
  }

  /** All companies. */
  getAllCompany() {
    return this.http.get(`${this.apiUrl}/companies`);
  }
}

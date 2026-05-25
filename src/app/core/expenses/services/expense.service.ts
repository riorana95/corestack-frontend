import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  CreateExpenseRequest,
  Expense,
  ExpensePage,
  GroupBalances,
} from '../models/expense.model';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/groups`;

  createExpense(groupId: string, request: CreateExpenseRequest): Observable<Expense> {
    return this.http.post<Expense>(`${this.baseUrl}/${groupId}/expenses`, request);
  }

  listExpenses(groupId: string, page = 0, size = 20): Observable<ExpensePage> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ExpensePage>(`${this.baseUrl}/${groupId}/expenses`, { params });
  }

  getBalances(groupId: string): Observable<GroupBalances> {
    return this.http.get<GroupBalances>(`${this.baseUrl}/${groupId}/balances`);
  }
}

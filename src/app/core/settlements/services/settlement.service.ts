import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  CreateSettlementRequest,
  Settlement,
  SimplifiedDebt,
} from '../models/settlement.model';

@Injectable({ providedIn: 'root' })
export class SettlementService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/groups`;

  getSimplifiedDebts(groupId: string): Observable<SimplifiedDebt[]> {
    return this.http.get<SimplifiedDebt[]>(`${this.baseUrl}/${groupId}/debts`);
  }

  listSettlements(groupId: string): Observable<Settlement[]> {
    return this.http.get<Settlement[]>(`${this.baseUrl}/${groupId}/settlements`);
  }

  createSettlement(groupId: string, request: CreateSettlementRequest): Observable<Settlement> {
    return this.http.post<Settlement>(`${this.baseUrl}/${groupId}/settlements`, request);
  }

  completeSettlement(groupId: string, settlementId: string): Observable<Settlement> {
    return this.http.patch<Settlement>(
      `${this.baseUrl}/${groupId}/settlements/${settlementId}/complete`,
      {}
    );
  }

  cancelSettlement(groupId: string, settlementId: string): Observable<Settlement> {
    return this.http.patch<Settlement>(
      `${this.baseUrl}/${groupId}/settlements/${settlementId}/cancel`,
      {}
    );
  }
}

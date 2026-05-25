import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  CreateGroupRequest,
  GroupDetail,
  GroupMember,
  GroupSummary,
  UserSearchResult,
} from '../models/group.model';

@Injectable({ providedIn: 'root' })
export class GroupService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/groups`;

  listMyGroups(): Observable<GroupSummary[]> {
    return this.http.get<GroupSummary[]>(this.baseUrl);
  }

  createGroup(request: CreateGroupRequest): Observable<GroupDetail> {
    return this.http.post<GroupDetail>(this.baseUrl, request);
  }

  getGroup(groupId: string): Observable<GroupDetail> {
    return this.http.get<GroupDetail>(`${this.baseUrl}/${groupId}`);
  }

  addMember(groupId: string, email: string): Observable<GroupMember> {
    return this.http.post<GroupMember>(`${this.baseUrl}/${groupId}/members`, { email });
  }

  removeMember(groupId: string, userId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${groupId}/members/${userId}`);
  }

  searchUsers(groupId: string, query: string): Observable<UserSearchResult[]> {
    const params = new HttpParams().set('q', query);
    return this.http.get<UserSearchResult[]>(`${this.baseUrl}/${groupId}/users/search`, {
      params,
    });
  }
}

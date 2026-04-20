import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddQuestionService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addQuestion(data: any) {
    return this.http.post(`${this.apiUrl}/question`, data);
  }

  UpdateQuestion(data: any) {
    return this.http.put(`${this.apiUrl}/question/${data.id}`, data);
  }
}
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Section {
  private apiUrl = environment.apiUrl;
  constructor(private https : HttpClient){
  }

  getFilteredQA(reqBody:any){
    const url = "http://localhost:8080";
    return this.https.get(`${this.apiUrl}/questions?companyName=${reqBody.companyName}&tag=${reqBody.tag}&page=${reqBody.currentPage}&size=${reqBody.pageSize}`);
  }

  getAllCompany() {
    const url = this.apiUrl + "/company";
    return this.https.get(url)
  }
}

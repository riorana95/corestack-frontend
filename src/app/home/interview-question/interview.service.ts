import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import interviewConfig  from "./interviewQA.json"
import sectionQuestionConfig from "./sectionQuestions.json"
import { signal } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})

export class InterviewService{
  private baseUrl = environment.apiUrl;

  question = signal<any[]>([]);
    constructor(
        private https : HttpClient,
    ){
      
    }

    getQuestionByCompanyId(selectedId: any) {
      const base = "http://localhost:8080";
      const url = base + "/question?companyId="+selectedId;
      return this.https.get(url);
    }

    getAllCompany() {
      const url = this.baseUrl + "/company";
      return this.https.get(url)
    }

    getQuestionsBySection(section: string) {
      const normalizedSection = section.toLowerCase();
      const questions = (sectionQuestionConfig as any)[normalizedSection] || [];
      return of(questions);
    }

    loadConfiguration() : Observable<any> {
        return of(interviewConfig)
        // const path = "assets/Angular/angularQuestion.json"
        // return this.https.get(path)
    }

     // Get all company names
  getCompanies(): string[] {
    return Object.keys(interviewConfig);
  }

  // Get questions for a specific company
  getQuestionsByCompany(companyName: string): any[] {
    const companyData = interviewConfig[companyName as keyof typeof interviewConfig];
    return companyData ? companyData.questions : [];
  }

  // Get all companies as array with their data
  getAllCompaniesWithQuestions(): { name: string; questions: any[] }[] {
    return this.getCompanies().map(company => ({
      name: company,
      questions: this.getQuestionsByCompany(company)
    }));
  }
}
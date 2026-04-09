import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import interviewConfig  from "./interviewQA.json"
import { signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class InterviewService{

  question = signal<any[]>([]);
    constructor(
        private https : HttpClient
    ){

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
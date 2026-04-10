import { Component, signal } from '@angular/core';
import { InterviewService } from '../interview.service';
import { QuestionCardComponent } from '../question-card-component/question-card-component';

@Component({
  selector: 'app-company-detail-component',
  imports: [QuestionCardComponent],
  templateUrl: './company-detail-component.html',
  styleUrl: './company-detail-component.scss',
})
export class CompanyDetailComponent {
  companies = signal<string[]>([]);
  selectedCompany = signal<string | null>(null);
  selectedQuestions = signal<any[]>([]);

  constructor(private interviewService: InterviewService) {}

  ngOnInit() {
    this.companies.set(this.interviewService.getCompanies());
  }

  // When user clicks a company
  selectCompany(companyName: string) {
    this.selectedCompany.set(companyName);
    this.selectedQuestions.set(this.interviewService.getQuestionsByCompany(companyName));
  }

  clearSelection() {
    this.selectedCompany.set(null);
    this.selectedQuestions.set([]);
  }

}

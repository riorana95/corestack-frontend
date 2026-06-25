import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionFilter } from '../section-detail-component/section-filter/section-filter';
import { SectionTable } from '../section-detail-component/section-table/section-table';
import { CompanyDetailComponent } from './company-detail-component/company-detail-component';
import { AiPrep } from '../ai-prep/ai-prep';

@Component({
  selector: 'app-interview',
  imports: [CommonModule, CompanyDetailComponent, SectionFilter, SectionTable, AiPrep],
  templateUrl: './interview.html',
  styleUrl: './interview.scss',
})
export class Interview implements OnInit {
  @ViewChild('questionFilterRef') questionFilter?: SectionFilter;

  /** Three views: companies (default), explorer (filter table), ai-prep (AI coach). */
  activeView: 'companies' | 'explorer' | 'ai-prep' = 'companies';
  filteredQuestionList: any[] = [];
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const view = this.route.snapshot.queryParamMap.get('view');
    if (view === 'explorer' || view === 'ai-prep') {
      this.activeView = view;
    }
  }

  setView(view: 'companies' | 'explorer' | 'ai-prep') {
    this.activeView = view;
  }

  questionList(event: any) {
    this.filteredQuestionList = event.content || event.data || event || [];
    this.totalPages = event.totalPages || 0;
    this.currentPage = event.page ?? event.number ?? this.currentPage;
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.questionFilter?.filterQuestions(this.currentPage, this.pageSize);
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.questionFilter?.filterQuestions(this.currentPage, this.pageSize);
    }
  }
}

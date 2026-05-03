import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { InterviewService } from '../interview-question/interview.service';
import { SectionFilter } from "./section-filter/section-filter";
import { SectionTable } from "./section-table/section-table";
import { Section } from './section';

@Component({
  selector: 'app-section-detail-component',
  imports: [SectionFilter, SectionTable],
  templateUrl: './section-detail-component.html',
  styleUrl: './section-detail-component.scss',
})
export class SectionDetailComponent implements OnInit {
  filteredQuestionList : any;
  @ViewChild('myChildFilterRef') child!: SectionFilter; 

  constructor(private sectionService : Section){}

  ngOnInit(): void {
  }

  questionList(event:any){       
    this.filteredQuestionList = event.data;
    this.totalPages = event.totalPages;
  }

  currentPage = 0;
  pageSize = 10;
  totalPages = 0;

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.child.filterQuestions(this.currentPage,this.pageSize);
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.child.filterQuestions(this.currentPage,this.pageSize);
    }
  }
}

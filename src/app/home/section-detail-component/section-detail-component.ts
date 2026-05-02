import { Component, signal } from '@angular/core';
import { InterviewService } from '../interview-question/interview.service';
import { SectionFilter } from "./section-filter/section-filter";
import { SectionTable } from "./section-table/section-table";

@Component({
  selector: 'app-section-detail-component',
  imports: [SectionFilter, SectionTable],
  templateUrl: './section-detail-component.html',
  styleUrl: './section-detail-component.scss',
})
export class SectionDetailComponent {
  filteredQuestionList : any;

  constructor() {}

  questionList(event:any){
    this.filteredQuestionList = event;
  }
}

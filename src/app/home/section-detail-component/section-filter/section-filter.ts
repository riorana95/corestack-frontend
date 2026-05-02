import { Component, Output, EventEmitter } from '@angular/core';
import { Section } from '../section';

@Component({
  selector: 'app-section-filter',
  imports: [],
  templateUrl: './section-filter.html',
  styleUrl: './section-filter.scss',
})
export class SectionFilter {
  @Output() questionSet = new EventEmitter<any>();

  constructor(private sectionService : Section){}
  filterQuestions(){
    this.sectionService.getFilteredQA().subscribe(
      {
        next : ((res:any)=>this.questionSet.emit(res)),
        error : ((err:any)=>err),
        complete : (()=>console.log("complete"))
      }
    );
  }
}

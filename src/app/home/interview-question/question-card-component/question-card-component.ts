import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-card-component',
  imports: [],
  templateUrl: './question-card-component.html',
  styleUrl: './question-card-component.scss',
})
export class QuestionCardComponent implements OnInit {

  @Input() question: any;
  @Input() companyName: any;

  ngOnInit() {
    console.log("question",this.question)
    console.log("company",this.companyName)
  }
}

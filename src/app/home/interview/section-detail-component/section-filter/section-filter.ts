import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Section } from '../section';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section-filter',
  imports: [FormsModule],
  templateUrl: './section-filter.html',
  styleUrl: './section-filter.scss',
})
export class SectionFilter implements OnInit {
  @Output() questionSet = new EventEmitter<any>();
  selectedCompany = '';
  selectedTag = '';
  companyList : any;
  skillList = [
  "angular",
  "react",
  "javascript",
  "typescript",
  "css",
  "html",
  "java",
  "backend",
  "sql",
  "rxjs",
  "hooks",
  "state-management",
  "performance",
  "architecture",
  "security",
  "auth",
  "system-design",
  "project",
  "behavioral",
  "coding",
  "dsa",
  "git",
  "ui",
  "ai"
];

  constructor(private sectionService : Section){}

  ngOnInit(){
    this.filterQuestions();
    this.sectionService.getAllCompany().subscribe({
      next : ((res:any)=> this.companyList = res.map((x:any)=>x.name))
    })
  }

  filterQuestions(currentPage? : Number, pageSize?: Number) {
    let reqBody = {
      companyName : this.selectedCompany === "All"?"":this.selectedCompany,
      tag : this.selectedTag === "All"?"":this.selectedTag,
      currentPage : currentPage || 0,
      pageSize : pageSize || 10
    }
    this.sectionService.getFilteredQA(reqBody)
      .subscribe((res:any) => {
        this.questionSet.emit(res);
        console.log(res);
        // this.tableList = res.content;
        // this.totalPages = res.totalPages;
    });
  }
}

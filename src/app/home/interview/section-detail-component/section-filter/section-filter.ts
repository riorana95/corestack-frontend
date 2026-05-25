import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Section } from '../section';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../../../../service/loader.service';

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
  sortBy = 'most-asked'; // 'most-asked' or 'all'
  companyList : any;
  skillList = [
  "frontend",
  "backend",
  "coding",
  "angular",
  "javascript",
  "typescript",
  "css",
  "html",
  "react",
  "java",
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
  "dsa",
  "git",
  "ui",
  "ai"
];

  constructor(
    private loaderService : LoaderService,
    private sectionService : Section){}

  ngOnInit(){
    this.filterQuestions();
    this.sectionService.getAllCompany().subscribe({
      next : ((res:any)=> this.companyList = res.map((x:any)=>x.name))
    })
  }

  filterQuestions(currentPage? : Number, pageSize?: Number) {
    // this.loaderService.display(true);    
    let reqBody = {
      companyName : this.selectedCompany === "All"?"":this.selectedCompany,
      tag : this.selectedTag === "All"?"":this.selectedTag,
      sortBy: this.sortBy,
      currentPage : currentPage || 0,
      pageSize : pageSize || 10
    }
    this.sectionService.getFilteredQA(reqBody)
      .subscribe(
        (res:any) => {
          // Ensure we have content array
          const questions = res.content || res.data || res;
          
          // Sort by frequency if "most-asked" is selected
          if (this.sortBy === 'most-asked' && Array.isArray(questions)) {
            const sortedQuestions = this.sortByFrequency(questions);
            res.content = sortedQuestions;
          }
          // this.loaderService.display(false);
          this.questionSet.emit(res);
          console.log('Filtered Questions:', res);
        },
        (error:any) => {
          // this.loaderService.display(false);
          console.error('Error fetching questions:', error);
        }
      );
  }

  // Sort questions by number of companies (frequency)
  private sortByFrequency(questions: any[]): any[] {
    return questions.sort((a, b) => {
      const aCount = a.companies?.length || 1;
      const bCount = b.companies?.length || 1;
      return bCount - aCount; // Descending order (most asked first)
    });
  }

  // Handle sort change - trigger immediate filtering
  onSortChange() {
    this.filterQuestions(0, 10);
  }

  // Handle company/skill filter change - trigger immediate filtering
  onFilterChange() {
    this.filterQuestions(0, 10);
  }
}

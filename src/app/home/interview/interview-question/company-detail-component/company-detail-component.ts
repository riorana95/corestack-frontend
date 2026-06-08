import { Component, inject, signal, ViewChild } from '@angular/core';
import { InterviewService } from '../interview.service';
import { QuestionCardComponent } from '../question-card-component/question-card-component';
import { AddQuestion } from '../../add-question/add-question';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-company-detail-component',
  imports: [QuestionCardComponent],
  templateUrl: './company-detail-component.html',
  styleUrl: './company-detail-component.scss',
  standalone : true
})
export class CompanyDetailComponent {
  companyDetails = signal<any[]>([]);
  selectedCompany = signal<string | null>(null);
  selectedQuestions = signal<any[]>([]);
  private dialog = inject(MatDialog);
  selectedCompanyId: any;
  groupedCompanies = signal<any[]>([]);

  constructor(
    private interviewService: InterviewService,
  ) {

  }

  ngOnInit() {
    this.getAllCompanyDetails()
  }

  getAllCompanyDetails(){
    const loader = true;
    this.interviewService.getAllCompany().subscribe({
      next : (res: any) =>{
        const companiesList = res.map((x:any)=>x.name)
        this.companyDetails.set(res);

const grouped = Object.values(
  res.reduce((acc: any, company: any) => {

    if (!acc[company.name]) {

      acc[company.name] = {
        name: company.name,
        role: company.role,
        rounds: []
      };

    }

    acc[company.name].rounds.push(company);

    return acc;

  }, {})
);

this.groupedCompanies.set(grouped);
      },error : (err) =>{

      },complete : ()=>{

      }
    })
  }

  // When user clicks a company
selectCompany(company: any) {

  this.selectedCompany.set(company.name);

  this.selectedQuestions.set([]);

  company.rounds.forEach((roundData: any) => {

    this.interviewService
      .getQuestionByCompanyId(roundData.id)
      .subscribe((questions: any) => {

        this.selectedQuestions.update(existing => [

          ...existing,

          {
            round: roundData.round,
            date: roundData.date,
            companyId: roundData.id,
            questions
          }

        ]);

      });

  });

}

  getQuestionByCompanyId(){
    
  }


  clearSelection() {
    this.selectedCompany.set(null);
    this.selectedQuestions.set([]);
  }

  onQuestionAdded(newQuestion: any) {
    this.selectedQuestions.update(q => [...q, newQuestion]); // add at bottom
  }

  onCompanyAdded(newCompany: any){
    this.companyDetails.update(x=>[...x, newCompany])
  }

  onQuestionUpdated(updateQuestion:any){
    this.selectedQuestions.update(question=>
      question.map(x=>x.id === updateQuestion.id ? {...x,...updateQuestion}:x)
    )
  }

  addPopup(type: string) {
    if(type === 'company'){
      const dailogref = this.dialog.open(AddQuestion, {
        panelClass: 'custom-dialog',
        width: '650px',
        maxHeight: '90vh'
      })
    } else if(type === 'question'){
      const entity = this.selectedQuestions();
      const dailogRef = this.dialog.open(AddQuestion, {
        panelClass: 'custom-dialog',
        data: { data: entity, isEditMode : false },
        width: '650px',
        maxHeight: '90vh'
    });
    dailogRef.afterClosed().subscribe(res =>{
      if(res.question){
        this.onQuestionAdded(res);
      }else{
        this.onCompanyAdded(res);
      }
    })
  }}

  formatDate(date: string): string {

  if (!date) return '';

  return new Date(date).toLocaleDateString(
    'en-US',
    {
      month: 'short',
      year: 'numeric'
    }
  );

}
}

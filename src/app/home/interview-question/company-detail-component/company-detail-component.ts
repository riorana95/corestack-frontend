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
  companies = signal<string[]>([]);
  companyDetails = signal<any[]>([]);
  selectedCompany = signal<string | null>(null);
  selectedQuestions = signal<any[]>([]);
  private dialog = inject(MatDialog);

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
        this.companies.set(companiesList);
      },error : (err) =>{

      },complete : ()=>{

      }
    })
  }

  // When user clicks a company
  selectCompany(companyName: string) {
    this.selectedCompany.set(companyName);
    const selectedId = this.companyDetails().find((x:any)=>x.name === companyName).id
    const loader = true;
    this.interviewService.getQuestionByCompanyId(selectedId).subscribe({
      next:(res:any)=>{
        console.log("resQ",res)
        this.selectedQuestions.set(res);
      }
    })
    // this.selectedQuestions.set(this.interviewService.getQuestionsByCompany(companyName));
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

  addQuestionPopup() {
    const entity = this.selectedQuestions()[0].companyEntity
    this.dialog.open(AddQuestion, {
      panelClass: 'custom-dialog',
      data: { data: entity, isEditMode : false },
      width: '650px',
      maxHeight: '90vh'
    });
  }
}

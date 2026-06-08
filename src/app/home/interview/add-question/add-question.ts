import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddQuestionService } from './add-question-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuillModule } from 'ngx-quill';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [FormsModule, QuillModule, DatePipe],
  templateUrl: './add-question.html',
  styleUrl: './add-question.scss',
})
export class AddQuestion {

  // 🔥 send saved question to parent
  @Output() questionAdded = new EventEmitter<any>();
  private dialogRef = inject(MatDialogRef<AddQuestion>)
  public receivedData = inject(MAT_DIALOG_DATA); 

  editorConfig = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'header': [1, 2, 3, false] }],
    ['code-block'],
    ['link'],
    ['clean']
    ]
  };

  constructor(private addService: AddQuestionService) {
    if(this.receivedData){
      if(this.receivedData.isEditMode){
          this.newQuestion.companyId = this.receivedData.data.id
          this.edit(this.receivedData.data)
      }else{
        this.availableId = this.receivedData.data;
      }
    }
  }

  availableId:any;

  availableTags: string[] = [
  'javascript',
  'angular',
  'java',
  'springboot',
  'frontend',
  'backend',
  'coding'
];

  newQuestion: any = {
    question: '',
    description: '',
    difficulty: 'beginner',
    contentType: 'mixed',
    content: null,
    tags: [],
    companyId: 1 // you can set dynamically later
  };

  newCompanyReq: any = {
    name: '',
    role : '',
    round : '',
    date : ''
  }

  // helpers for table UI
  tableColumns = '';
  tableRows = '';

  edit(data: any) {
    this.newQuestion = { 
    ...this.newQuestion, 
    ...data 
    }
  }

close() {
  if(this.receivedData){
      this.receivedData.isEditMode = false;
      this.dialogRef.close(this.newQuestion);
  }else{
    this.dialogRef.close(this.newCompanyReq);
  }

}

  save() {
    if(this.receivedData){
      if(this.receivedData.isEditMode){
      this.addService.UpdateQuestion(this.newQuestion).subscribe((res:any) => {
        this.questionAdded.emit(res);
        this.close();
      });
      }else{
        this.addService.addQuestion(this.newQuestion).subscribe((res:any) => {
          this.questionAdded.emit(res);
          this.close();
        });
      }
    }else{
      this.newCompanyReq.date = formatDate(this.newCompanyReq.date, 'dd-MM-yyyy', 'en-US');
      this.addService.addCompnay(this.newCompanyReq).subscribe((res:any)=>{
        this.close();
      })
    }
  }

  toggleTag(tag: string) {

  const index = this.newQuestion.tags.indexOf(tag);

  if (index > -1) {
    this.newQuestion.tags.splice(index, 1);
  } else {
    this.newQuestion.tags.push(tag);
  }

}

isTagSelected(tag: string): boolean {
  return this.newQuestion.tags.includes(tag);
}
}
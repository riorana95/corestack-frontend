import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddQuestionService } from './add-question-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [FormsModule, QuillModule],
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
    if(this.receivedData.isEditMode){
        this.newQuestion.companyId = this.receivedData.data.companyEntity.id
        this.edit(this.receivedData.data)
    }else{
      this.newQuestion.companyId = this.receivedData.data.id
    }
  }

  newQuestion: any = {
    question: '',
    description: '',
    difficulty: 'beginner',
    contentType: 'mixed',
    content: null,
    tags: [],
    companyId: 1 // you can set dynamically later
  };

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
  this.receivedData.isEditMode = false;
  this.dialogRef.close();
}

save() {
  if(this.receivedData.isEditMode){
    this.addService.UpdateQuestion(this.newQuestion).subscribe((res:any) => {
      this.questionAdded.emit(res);
      this.close();
    });
  }else{
    const reqBody = { 
      ...this.newQuestion, 
      companyEntity: this.receivedData.data 
    };
    this.addService.addQuestion(reqBody).subscribe((res:any) => {
      this.questionAdded.emit(res);
      this.close();
    });
  }

}
}
import { Component, signal } from '@angular/core';
import { InterviewService } from '../interview-question/interview.service';
import { QuestionCardComponent } from '../interview-question/question-card-component/question-card-component';

@Component({
  selector: 'app-section-detail-component',
  imports: [QuestionCardComponent],
  templateUrl: './section-detail-component.html',
  styleUrl: './section-detail-component.scss',
})
export class SectionDetailComponent {
  sections = signal<string[]>(['Frontend', 'Backend']);
  selectedSection = signal<string | null>(null);
  selectedQuestions = signal<any[]>([]);
  loading = signal<boolean>(false);

  constructor(private interviewService: InterviewService) {}

  // When user selects a section
  selectSection(section: string) {
    this.selectedSection.set(section);
    this.loading.set(true);
    
    const sectionParam = section.toLowerCase();
    this.interviewService.getQuestionsBySection(sectionParam).subscribe({
      next: (res: any) => {
        console.log("Section Questions:", res);
        this.selectedQuestions.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Error fetching section questions:", err);
        this.loading.set(false);
      },
      complete: () => {
        console.log("Section questions loaded");
      }
    });
  }

  clearSelection() {
    this.selectedSection.set(null);
    this.selectedQuestions.set([]);
  }
}

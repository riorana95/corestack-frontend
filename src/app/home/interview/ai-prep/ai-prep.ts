import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockInterview } from './mock-interview/mock-interview';
import { AnswerCoach } from './answer-coach/answer-coach';
import { QuestionGenerator } from './question-generator/question-generator';
import { AiPrepMode } from './ai-prep.models';

/**
 * AI Prep — container component with a 3-tab switcher.
 *
 * Lives as a tab inside the existing Interview Workspace (next to
 * "Company Interviews" and "Question Explorer"). Hosts three AI
 * modes that all share the same proxy backend:
 *
 *   - Mock Interview: guided 3-screen flow (setup → interview → results)
 *   - Answer Coach: pick a question, type your answer, get AI evaluation
 *   - Question Generator: topic + difficulty + count → AI generates
 *
 * The active tab is held in a signal so switching is instant with no
 * route change. Each mode manages its own state independently.
 */
@Component({
  selector: 'app-ai-prep',
  standalone: true,
  imports: [CommonModule, MockInterview, AnswerCoach, QuestionGenerator],
  templateUrl: './ai-prep.html',
  styleUrl: './ai-prep.scss',
})
export class AiPrep {
  readonly mode = signal<AiPrepMode>('mock-interview');

  readonly tabs: { id: AiPrepMode; label: string; description: string }[] = [
    {
      id: 'mock-interview',
      label: 'Mock Interview',
      description: 'AI interviewer asks questions, evaluates answers, scores your session',
    },
    {
      id: 'answer-coach',
      label: 'Answer Coach',
      description: 'Type your answer to any question, get instant AI feedback',
    },
    {
      id: 'question-generator',
      label: 'Question Generator',
      description: 'Generate fresh practice questions on any topic with model answers',
    },
  ];

  selectMode(mode: AiPrepMode): void {
    this.mode.set(mode);
  }
}

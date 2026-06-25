import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiPrepService } from '../ai-prep.service';
import { AnswerCoachResponse, Difficulty } from '../ai-prep.models';

/**
 * Answer Coach — standalone answer evaluator.
 *
 * User pastes (or types) a question and their answer, optionally
 * provides a reference answer, and gets an instant AI evaluation:
 * score 0-100, 3-bullet feedback (good/missing/wrong), model answer,
 * and a follow-up tip.
 *
 * No session state — each evaluation is independent.
 */
@Component({
  selector: 'app-answer-coach',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './answer-coach.html',
  styleUrl: './answer-coach.scss',
})
export class AnswerCoach {
  private readonly aiService = inject(AiPrepService);

  readonly question = signal<string>('');
  readonly userAnswer = signal<string>('');
  readonly idealAnswer = signal<string>('');
  readonly difficulty = signal<Difficulty>('intermediate');

  readonly loading = signal<boolean>(false);
  readonly error = signal<string>('');
  readonly evaluation = signal<AnswerCoachResponse | null>(null);

  readonly difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced'];

  evaluate(): void {
    if (!this.question().trim() || !this.userAnswer().trim()) {
      this.error.set('Both question and your answer are required.');
      return;
    }

    this.loading.set(true);
    this.error.set('');
    this.evaluation.set(null);

    this.aiService
      .evaluateAnswer({
        question: this.question().trim(),
        userAnswer: this.userAnswer().trim(),
        idealAnswer: this.idealAnswer().trim() || undefined,
        difficulty: this.difficulty(),
      })
      .subscribe({
        next: (res) => {
          this.evaluation.set(res);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(err.error?.detail || err.message || 'Evaluation failed');
          this.loading.set(false);
        },
      });
  }

  reset(): void {
    this.question.set('');
    this.userAnswer.set('');
    this.idealAnswer.set('');
    this.evaluation.set(null);
    this.error.set('');
  }

  scoreClass(score: number): string {
    if (score >= 80) return 'score--high';
    if (score >= 60) return 'score--mid';
    return 'score--low';
  }
}

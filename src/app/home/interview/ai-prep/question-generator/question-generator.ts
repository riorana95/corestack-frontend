import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiPrepService } from '../ai-prep.service';
import { GeneratedQuestion, Difficulty, AI_PREP_TOPICS } from '../ai-prep.models';

/**
 * Question Generator — AI-powered practice question generator.
 *
 * User picks a topic (from a preset list or custom), difficulty, and
 * count. GLM-4.6 generates the requested number of questions with
 * model answers and tags. Results render as expandable cards.
 */
@Component({
  selector: 'app-question-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question-generator.html',
  styleUrl: './question-generator.scss',
})
export class QuestionGenerator {
  private readonly aiService = inject(AiPrepService);

  readonly topics = AI_PREP_TOPICS;
  readonly difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced'];
  readonly counts = [3, 5, 10, 15];

  readonly selectedTopic = signal<string>('Spring Boot');
  readonly customTopic = signal<string>('');
  readonly useCustomTopic = signal<boolean>(false);
  readonly selectedDifficulty = signal<Difficulty>('intermediate');
  readonly selectedCount = signal<number>(5);

  readonly loading = signal<boolean>(false);
  readonly error = signal<string>('');
  readonly questions = signal<GeneratedQuestion[]>([]);

  selectTopic(topic: string): void {
    this.selectedTopic.set(topic);
    this.useCustomTopic.set(false);
  }

  enableCustomTopic(): void {
    this.useCustomTopic.set(true);
  }

  generate(): void {
    const topic = this.useCustomTopic()
      ? this.customTopic().trim()
      : this.selectedTopic();

    if (!topic) {
      this.error.set('Pick or type a topic.');
      return;
    }

    this.loading.set(true);
    this.error.set('');
    this.questions.set([]);

    this.aiService
      .generateQuestions({
        topic,
        difficulty: this.selectedDifficulty(),
        count: this.selectedCount(),
      })
      .subscribe({
        next: (res) => {
          this.questions.set(res.questions || []);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(err.error?.detail || err.message || 'Generation failed');
          this.loading.set(false);
        },
      });
  }
}

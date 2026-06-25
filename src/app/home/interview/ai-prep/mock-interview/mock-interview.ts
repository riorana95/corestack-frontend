import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiPrepService } from '../ai-prep.service';
import {
  MockInterviewSetup,
  MockInterviewScreen,
  MockStartResponse,
  MockAnswerResponse,
  MockResultsResponse,
  TranscriptEntry,
  Difficulty,
  QuestionSource,
  AI_PREP_ROLES,
  AI_PREP_SKILLS,
} from '../ai-prep.models';

/**
 * Mock Interview — guided 3-screen flow.
 *
 * Screen 1 (setup): user picks role, skills, difficulty, question count, source.
 * Screen 2 (interview): chat-style Q&A — AI asks, user answers, AI evaluates + asks next.
 * Screen 3 (results): overall score, per-question breakdown, weak areas, recommendations.
 *
 * State is held in signals so the UI reacts instantly. The transcript
 * accumulates across the interview and is sent to the proxy at the end
 * to generate the final summary.
 */
@Component({
  selector: 'app-mock-interview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mock-interview.html',
  styleUrl: './mock-interview.scss',
})
export class MockInterview {
  private readonly aiService = inject(AiPrepService);

  // ---------- Static option lists ----------
  readonly roles = AI_PREP_ROLES;
  readonly skills = AI_PREP_SKILLS;
  readonly difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced'];
  readonly counts = [3, 5, 8, 10];
  readonly sources: { id: QuestionSource; label: string; desc: string }[] = [
    { id: 'hybrid', label: 'Hybrid', desc: 'Bank questions + AI follow-ups' },
    { id: 'bank', label: 'Question Bank', desc: 'Only from your 500+ bank' },
    { id: 'ai-generated', label: 'AI-Generated', desc: 'Fresh questions from GLM' },
  ];

  // ---------- Setup screen state ----------
  readonly screen = signal<MockInterviewScreen>('setup');
  readonly selectedRole = signal<string>('Senior Backend Engineer');
  readonly selectedSkills = signal<Set<string>>(new Set(['Spring Boot', 'Java']));
  readonly selectedDifficulty = signal<Difficulty>('intermediate');
  readonly selectedCount = signal<number>(5);
  readonly selectedSource = signal<QuestionSource>('hybrid');

  // ---------- Interview screen state ----------
  readonly session = signal<MockStartResponse | null>(null);
  readonly transcript = signal<TranscriptEntry[]>([]);
  readonly currentAnswer = signal<string>('');
  readonly loading = signal<boolean>(false);
  readonly error = signal<string>('');
  readonly lastEvaluation = signal<MockAnswerResponse | null>(null);

  // ---------- Results screen state ----------
  readonly results = signal<MockResultsResponse | null>(null);

  // ---------- Computed ----------
  readonly progressPct = computed(() => {
    const s = this.session();
    if (!s) return 0;
    return Math.round(((s.questionNumber - 1) / s.totalQuestions) * 100);
  });

  // ---------- Setup actions ----------
  toggleSkill(skill: string): void {
    const current = new Set(this.selectedSkills());
    if (current.has(skill)) {
      current.delete(skill);
    } else {
      current.add(skill);
    }
    this.selectedSkills.set(current);
  }

  isSkillSelected(skill: string): boolean {
    return this.selectedSkills().has(skill);
  }

  startInterview(): void {
    if (this.selectedSkills().size === 0) {
      this.error.set('Select at least one skill.');
      return;
    }

    this.loading.set(true);
    this.error.set('');

    const setup: MockInterviewSetup = {
      role: this.selectedRole(),
      skills: [...this.selectedSkills()],
      difficulty: this.selectedDifficulty(),
      questionCount: this.selectedCount(),
      source: this.selectedSource(),
    };

    this.aiService.startMockInterview(setup).subscribe({
      next: (res) => {
        this.session.set(res);
        this.transcript.set([]);
        this.lastEvaluation.set(null);
        this.currentAnswer.set('');
        this.screen.set('interview');
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.detail || err.message || 'Failed to start interview');
        this.loading.set(false);
      },
    });
  }

  // ---------- Interview actions ----------
  submitAnswer(): void {
    const answer = this.currentAnswer().trim();
    if (!answer) {
      return;
    }

    const s = this.session();
    if (!s) return;

    this.loading.set(true);
    this.error.set('');

    this.aiService
      .submitMockAnswer({
        sessionId: s.sessionId,
        currentQuestion: s.question,
        userAnswer: answer,
        questionNumber: s.questionNumber,
        totalQuestions: s.totalQuestions,
        transcript: this.transcript(),
        source: this.selectedSource(),
      })
      .subscribe({
        next: (res) => {
          // Add this Q&A pair to the transcript
          this.transcript.update((t) => [
            ...t,
            {
              question: s.question,
              userAnswer: answer,
              evaluation: res.evaluation,
            },
          ]);

          this.lastEvaluation.set(res);

          // Advance to next question or finish
          if (res.next.type === 'question' && res.next.question) {
            this.session.set({
              ...s,
              question: res.next.question,
              questionNumber: res.next.questionNumber ?? s.questionNumber + 1,
              message: res.next.message,
            });
            this.currentAnswer.set('');
          } else {
            // Interview complete — fetch results
            this.fetchResults(s.sessionId);
          }

          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(err.error?.detail || err.message || 'Failed to evaluate answer');
          this.loading.set(false);
        },
      });
  }

  private fetchResults(sessionId: string): void {
    this.loading.set(true);
    this.aiService
      .getMockResults({
        sessionId,
        transcript: this.transcript(),
        role: this.selectedRole(),
        skills: [...this.selectedSkills()],
      })
      .subscribe({
        next: (res) => {
          this.results.set(res);
          this.screen.set('results');
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(err.error?.detail || err.message || 'Failed to generate results');
          this.loading.set(false);
        },
      });
  }

  endEarly(): void {
    const s = this.session();
    if (!s) return;
    this.fetchResults(s.sessionId);
  }

  // ---------- Results actions ----------
  restart(): void {
    this.screen.set('setup');
    this.session.set(null);
    this.transcript.set([]);
    this.currentAnswer.set('');
    this.lastEvaluation.set(null);
    this.results.set(null);
    this.error.set('');
  }

  practiceWeakAreas(): void {
    const r = this.results();
    if (!r || r.weakAreas.length === 0) {
      this.restart();
      return;
    }
    // Start a new interview with weak areas as the skills
    this.selectedSkills.set(new Set(r.weakAreas.slice(0, 3)));
    this.selectedSource.set('ai-generated');
    this.restart();
  }

  // ---------- Helpers ----------
  scoreClass(score: number): string {
    if (score >= 80) return 'score--high';
    if (score >= 60) return 'score--mid';
    return 'score--low';
  }
}

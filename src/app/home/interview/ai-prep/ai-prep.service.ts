import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  MockInterviewSetup,
  MockStartResponse,
  MockAnswerResponse,
  MockResultsResponse,
  AnswerCoachRequest,
  AnswerCoachResponse,
  QuestionGeneratorRequest,
  QuestionGeneratorResponse,
  TranscriptEntry,
} from './ai-prep.models';

/**
 * AI Prep service — HTTP client for the CoreStack AI proxy.
 *
 * All calls go to the Node.js proxy (environment.aiProxyUrl), which
 * holds the Z.ai API key and applies structured prompts. The Angular
 * frontend never sees the API key.
 *
 * The proxy is stateless — session context (transcript, question bank
 * subset) is passed from the frontend on each call. This keeps the
 * proxy horizontally scalable.
 */
@Injectable({ providedIn: 'root' })
export class AiPrepService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.aiProxyUrl;

  /** POST /api/ai/mock-interview/start */
  startMockInterview(setup: MockInterviewSetup): Observable<MockStartResponse> {
    return this.http.post<MockStartResponse>(
      `${this.baseUrl}/api/ai/mock-interview/start`,
      setup,
    );
  }

  /** POST /api/ai/mock-interview/answer */
  submitMockAnswer(payload: {
    sessionId: string;
    currentQuestion: MockStartResponse['question'];
    userAnswer: string;
    questionNumber: number;
    totalQuestions: number;
    transcript: TranscriptEntry[];
    source: MockInterviewSetup['source'];
    questionBank?: string[];
  }): Observable<MockAnswerResponse> {
    return this.http.post<MockAnswerResponse>(
      `${this.baseUrl}/api/ai/mock-interview/answer`,
      payload,
    );
  }

  /** POST /api/ai/mock-interview/results */
  getMockResults(payload: {
    sessionId: string;
    transcript: TranscriptEntry[];
    role: string;
    skills: string[];
  }): Observable<MockResultsResponse> {
    return this.http.post<MockResultsResponse>(
      `${this.baseUrl}/api/ai/mock-interview/results`,
      payload,
    );
  }

  /** POST /api/ai/answer-coach/evaluate */
  evaluateAnswer(req: AnswerCoachRequest): Observable<AnswerCoachResponse> {
    return this.http.post<AnswerCoachResponse>(
      `${this.baseUrl}/api/ai/answer-coach/evaluate`,
      req,
    );
  }

  /** POST /api/ai/question-generator */
  generateQuestions(req: QuestionGeneratorRequest): Observable<QuestionGeneratorResponse> {
    return this.http.post<QuestionGeneratorResponse>(
      `${this.baseUrl}/api/ai/question-generator`,
      req,
    );
  }
}

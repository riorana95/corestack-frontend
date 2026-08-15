import {
  Injectable,
  inject,
} from '@angular/core';

import {
  HttpClient,
} from '@angular/common/http';

import {
  Observable,
} from 'rxjs';

import {
  environment,
} from '../../../environments/environment';

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
  VoiceInterviewResults,
  VoiceInterviewSetup,
  VoiceSessionResponse,
  VoiceSpeechStats,
  VoiceTranscriptEntry,
} from './ai-prep.models';


@Injectable({
  providedIn: 'root',
})
export class AiPrepService {

  private readonly http =
    inject(HttpClient);


  private readonly baseUrl =
    environment.aiProxyUrl;


  /* ============================================================
     MOCK INTERVIEW
     ============================================================ */

  startMockInterview(
    setup: MockInterviewSetup
  ): Observable<MockStartResponse> {

    return this.http.post<MockStartResponse>(
      `${this.baseUrl}/api/ai/mock-interview/start`,
      setup,
    );
  }


  submitMockAnswer(
    payload: {
      sessionId: string;

      currentQuestion:
        MockStartResponse['question'];

      userAnswer: string;

      questionNumber: number;

      totalQuestions: number;

      transcript:
        TranscriptEntry[];

      source:
        MockInterviewSetup['source'];

      questionBank?: string[];
    }
  ): Observable<MockAnswerResponse> {

    return this.http.post<MockAnswerResponse>(
      `${this.baseUrl}/api/ai/mock-interview/answer`,
      payload,
    );
  }


  getMockResults(
    payload: {
      sessionId: string;

      transcript:
        TranscriptEntry[];

      role: string;

      skills: string[];
    }
  ): Observable<MockResultsResponse> {

    return this.http.post<MockResultsResponse>(
      `${this.baseUrl}/api/ai/mock-interview/results`,
      payload,
    );
  }


  /* ============================================================
     ANSWER COACH
     ============================================================ */

  evaluateAnswer(
    req: AnswerCoachRequest
  ): Observable<AnswerCoachResponse> {

    return this.http.post<AnswerCoachResponse>(
      `${this.baseUrl}/api/ai/answer-coach/evaluate`,
      req,
    );
  }


  /* ============================================================
     QUESTION GENERATOR
     ============================================================ */

  generateQuestions(
    req: QuestionGeneratorRequest
  ): Observable<QuestionGeneratorResponse> {

    return this.http.post<QuestionGeneratorResponse>(
      `${this.baseUrl}/api/ai/question-generator`,
      req,
    );
  }


  /* ============================================================
     VOICE SESSION
     ============================================================ */

  createVoiceSession(
    setup: VoiceInterviewSetup
  ): Observable<VoiceSessionResponse> {

    return this.http.post<VoiceSessionResponse>(
      `${this.baseUrl}/api/ai/voice/session`,
      setup,
    );
  }


  /* ============================================================
     VOICE RESULTS
     ============================================================ */

  getVoiceResults(
    payload: {
      role: string;

      skills: string[];

      transcript:
        VoiceTranscriptEntry[];

      speechStats:
        VoiceSpeechStats;
    }
  ): Observable<VoiceInterviewResults> {

    return this.http.post<VoiceInterviewResults>(
      `${this.baseUrl}/api/ai/voice/results`,
      payload,
    );
  }
}
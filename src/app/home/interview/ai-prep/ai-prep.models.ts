/**
 * Xora AI Prep — Shared TypeScript Models
 *
 * Contains the contracts shared by:
 * - Mock Interview
 * - Voice Interview
 * - Answer Coach
 * - Question Generator
 */

export type Difficulty =
  | 'beginner'
  | 'intermediate'
  | 'advanced';

export type QuestionSource =
  | 'bank'
  | 'ai-generated'
  | 'hybrid';

/* ============================================================
   SHARED QUESTION MODELS
   ============================================================ */

export interface InterviewQuestion {
  id: string;
  text: string;
  topic: string;
  difficulty: Difficulty;
  source: 'bank' | 'ai-generated';
}

/* ============================================================
   MOCK INTERVIEW
   ============================================================ */

export interface MockInterviewSetup {
  role: string;
  skills: string[];
  difficulty: Difficulty;
  questionCount: number;
  source: QuestionSource;

  /**
   * Optional subset of questions supplied by the frontend.
   */
  questionBank?: string[];
}

export interface MockStartResponse {
  sessionId: string;

  question: InterviewQuestion;

  questionNumber: number;

  totalQuestions: number;

  message: string;
}

export interface AnswerEvaluation {
  score: number;

  feedback: {
    good: string;
    missing: string;
    wrong: string;
  };

  idealAnswer: string;
}

export interface MockAnswerResponse {
  evaluation: AnswerEvaluation;

  next: {
    type: 'question' | 'complete';

    question: InterviewQuestion | null;

    questionNumber: number | null;

    message: string;
  };
}

export interface TranscriptEntry {
  question: InterviewQuestion;

  userAnswer: string;

  evaluation: AnswerEvaluation;
}

export interface MockResultsResponse {
  overallScore: number;

  summary: string;

  strengths: string[];

  weakAreas: string[];

  recommendations: string[];

  questionBreakdown: {
    questionId: string;
    topic: string;
    score: number;
    oneLineFeedback: string;
  }[];
}

/* ============================================================
   ANSWER COACH
   ============================================================ */

export interface AnswerCoachRequest {
  question: string;

  userAnswer: string;

  idealAnswer?: string;

  difficulty?: Difficulty;
}

export interface AnswerCoachResponse
  extends AnswerEvaluation {
  followUpTip: string;
}

/* ============================================================
   QUESTION GENERATOR
   ============================================================ */

export interface QuestionGeneratorRequest {
  topic: string;

  difficulty: Difficulty;

  count: number;
}

export interface GeneratedQuestion {
  id: string;

  text: string;

  topic: string;

  difficulty: Difficulty;

  answer: string;

  tags: string[];
}

export interface QuestionGeneratorResponse {
  questions: GeneratedQuestion[];
}

/* ============================================================
   VOICE INTERVIEW
   ============================================================ */

export interface VoiceInterviewSetup {
  role: string;

  skills: string[];

  difficulty: Difficulty;
}

/**
 * Short-lived Gemini Live authentication token.
 *
 * The permanent Gemini API key must NEVER be sent to Angular.
 */
export interface VoiceSessionResponse {
  token: string;

  model: string;

  config: Record<string, unknown>;

  expiresAt?: string;

  newSessionExpiresAt?: string;
}

export interface VoiceTranscriptEntry {
  speaker: 'candidate' | 'interviewer';

  text: string;
}

export interface VoiceSpeechStats {
  candidateWords: number;

  wordsPerMinute: number | null;

  fillerWords: Record<string, number>;
}

export interface VoiceInterviewResults {
  overallScore: number;

  technicalKnowledge: number;

  communication: number;

  summary: string;

  strengths: string[];

  weakAreas: string[];

  recommendations: string[];
}

/* ============================================================
   UI STATE
   ============================================================ */

export type MockInterviewScreen =
  | 'setup'
  | 'interview'
  | 'results';

export type AiPrepMode =
  | 'mock-interview'
  | 'voice-interview'
  | 'answer-coach'
  | 'question-generator';

/* ============================================================
   AI PREP OPTIONS
   ============================================================ */

export const AI_PREP_ROLES = [
  'Senior Backend Engineer',
  'Senior Frontend Engineer',
  'Full Stack Engineer',
  'System Design Engineer',
] as const;

export const AI_PREP_SKILLS = [
  'Spring Boot',
  'Java',
  'Java 8+',
  'JPA / Hibernate',
  'Microservices',
  'Kafka',
  'REST APIs',
  'Security',
  'Kubernetes',
  'Docker',
  'System Design',
  'Angular',
  'React',
  'TypeScript',
  'JavaScript',
  'SQL',
  'PostgreSQL',
] as const;

export const AI_PREP_TOPICS = [
  'Spring Boot',
  'Spring Boot Transactions',
  'Java Concurrency',
  'Java Collections',
  'Java 8 Streams',
  'JPA / Hibernate',
  'Microservices',
  'Kafka',
  'REST API Design',
  'System Design',
  'Angular',
  'React',
  'TypeScript',
  'SQL',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
] as const;
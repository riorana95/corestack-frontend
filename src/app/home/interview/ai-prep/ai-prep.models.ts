/**
 * AI Prep — TypeScript models
 *
 * Mirrors the JSON contract defined in the AI proxy's prompts.js.
 * Kept in one place so both the service and the components share
 * the same types.
 */

// ---------- Shared ----------
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type QuestionSource = 'bank' | 'ai-generated' | 'hybrid';

export interface InterviewQuestion {
  id: string;
  text: string;
  topic: string;
  difficulty: Difficulty;
  source: 'bank' | 'ai-generated';
}

// ---------- Mock Interview ----------
export interface MockInterviewSetup {
  role: string;
  skills: string[];
  difficulty: Difficulty;
  questionCount: number;
  source: QuestionSource;
  /** Optional: subset of your question bank to draw from.
   *  Passed from the Angular frontend; the proxy forwards it to GLM. */
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
  score: number; // 0-100
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

// ---------- Answer Coach ----------
export interface AnswerCoachRequest {
  question: string;
  userAnswer: string;
  idealAnswer?: string;
  difficulty?: Difficulty;
}

export interface AnswerCoachResponse extends AnswerEvaluation {
  followUpTip: string;
}

// ---------- Question Generator ----------
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

// ---------- UI State ----------
export type MockInterviewScreen = 'setup' | 'interview' | 'results';
export type AiPrepMode = 'mock-interview' | 'answer-coach' | 'question-generator';

/** Roles and skills offered in the setup screen. */
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

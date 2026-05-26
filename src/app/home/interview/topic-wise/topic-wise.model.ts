export type TopicDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface TopicQuestion {
  id: string;
  title: string;
  difficulty: TopicDifficulty;
  tags: string[];
  shortAnswer: string;
  detailedAnswer: string;
  codeExample?: string;
}

export interface TopicNode {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  questions?: TopicQuestion[];
  children?: TopicNode[];
}

export interface TopicArea {
  id: string;
  title: string;
  summary: string;
  accent: string;
  nodes: TopicNode[];
}

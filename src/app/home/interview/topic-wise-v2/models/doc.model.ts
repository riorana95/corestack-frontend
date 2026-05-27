export type DocLevel =
  | 'beginner'
  | 'intermediate'
  | 'advanced';

export interface CodeBlock {
  language: string;
  title?: string;
  code: string;
}

export interface DocArticle {
  id: string;

  title: string;

  level: DocLevel;

  tags: string[];

  content: string;

  codeBlocks?: CodeBlock[];
}

export interface DocSection {
  id: string;

  title: string;

  summary?: string;

  children?: DocSection[];

  articles?: DocArticle[];
}

export interface DocTopicArea {
  id: string;

  title: string;

  sections: DocSection[];
}

export interface SearchItem {

  id: string;

  title: string;

  category: string;

  section: string;

  tags: string[];

  route: string;
}
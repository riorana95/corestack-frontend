import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TOPIC_WISE_AREAS } from './topic-wise.config';
import { TopicArea, TopicDifficulty, TopicNode, TopicQuestion } from './topic-wise.model';

type AnswerTab = 'short' | 'detailed' | 'code';
type DifficultyFilter = 'all' | TopicDifficulty;

@Component({
  selector: 'app-topic-wise',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './topic-wise.html',
  styleUrl: './topic-wise.scss',
})
export class TopicWise {
  readonly areas = TOPIC_WISE_AREAS;

  readonly selectedAreaId = signal(this.areas[0].id);
  readonly selectedTopicId = signal(this.areas[0].nodes[0].id);
  readonly searchTerm = signal('');
  readonly difficulty = signal<DifficultyFilter>('all');
  readonly activeQuestionId = signal<string | null>(null);
  readonly activeAnswerTab = signal<AnswerTab>('short');

  readonly selectedArea = computed(() => {
    return this.areas.find((area) => area.id === this.selectedAreaId()) ?? this.areas[0];
  });

  readonly selectedTopic = computed(() => {
    const area = this.selectedArea();
    return area.nodes.find((node) => node.id === this.selectedTopicId()) ?? area.nodes[0];
  });

  readonly visibleQuestions = computed(() => {
    const questions = this.collectQuestions(this.selectedTopic());
    const normalizedSearch = this.searchTerm().trim().toLowerCase();
    const difficulty = this.difficulty();

    return questions.filter((question) => {
      const matchesDifficulty = difficulty === 'all' || question.difficulty === difficulty;
      const matchesSearch =
        !normalizedSearch ||
        question.title.toLowerCase().includes(normalizedSearch) ||
        question.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

      return matchesDifficulty && matchesSearch;
    });
  });

  readonly activeQuestion = computed(() => {
    const questions = this.visibleQuestions();
    const selectedId = this.activeQuestionId();
    return questions.find((question) => question.id === selectedId) ?? questions[0] ?? null;
  });

  readonly totalQuestionCount = computed(() => {
    return this.collectQuestions(this.selectedArea()).length;
  });

  selectArea(area: TopicArea): void {
    this.selectedAreaId.set(area.id);
    this.selectedTopicId.set(area.nodes[0]?.id ?? '');
    this.activeQuestionId.set(null);
    this.activeAnswerTab.set('short');
  }

  selectTopic(topic: TopicNode): void {
    this.selectedTopicId.set(topic.id);
    this.activeQuestionId.set(null);
    this.activeAnswerTab.set('short');
  }

  selectQuestion(question: TopicQuestion): void {
    this.activeQuestionId.set(question.id);
    this.activeAnswerTab.set('short');
  }

  setSearchTerm(value: string): void {
    this.searchTerm.set(value);
    this.activeQuestionId.set(null);
  }

  setDifficulty(value: DifficultyFilter): void {
    this.difficulty.set(value);
    this.activeQuestionId.set(null);
  }

  setAnswerTab(tab: AnswerTab): void {
    this.activeAnswerTab.set(tab);
  }

  getTopicQuestionCount(topic: TopicNode): number {
    return this.collectQuestions(topic).length;
  }

  trackById(_: number, item: TopicArea | TopicNode | TopicQuestion): string {
    return item.id;
  }

  private collectQuestions(source: TopicArea | TopicNode): TopicQuestion[] {
    const nodes = 'nodes' in source ? source.nodes : [source];
    return nodes.flatMap((node) => [
      ...(node.questions ?? []),
      ...this.collectQuestionsFromNodes(node.children ?? []),
    ]);
  }

  private collectQuestionsFromNodes(nodes: TopicNode[]): TopicQuestion[] {
    return nodes.flatMap((node) => [
      ...(node.questions ?? []),
      ...this.collectQuestionsFromNodes(node.children ?? []),
    ]);
  }
}

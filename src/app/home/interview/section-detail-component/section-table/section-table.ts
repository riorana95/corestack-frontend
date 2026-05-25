import {
  Component,
  Input,
  AfterViewChecked,
  ElementRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import DOMPurify from 'dompurify';
import hljs from 'highlight.js';

interface Company {
  id: number;
  name: string;
  role: string;
}

interface Question {
  id?: number;
  question: string;
  description?: string;
  companies: Company[];
}

@Component({
  selector: 'app-section-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-table.html',
  styleUrl: './section-table.scss',
})
export class SectionTable implements AfterViewChecked {

  @Input() tableList: Question[] = [];

  expandedRow: number | null = null;

  constructor(private el: ElementRef) {}

  // Tooltip Position Configuration
  tooltipPositions = {
    frequency: 'bottom',
    fire: 'left'
  };

  toggleRow(index: number) {
    this.expandedRow =
      this.expandedRow === index ? null : index;
  }

  // Get primary company
  getPrimaryCompany(companies: Company[]): Company | null {
    return companies && companies.length > 0
      ? companies[0]
      : null;
  }

  // Check multiple companies
  hasMultipleCompanies(companies: Company[]): boolean {
    return companies && companies.length > 1;
  }

  // Frequency badge
  getFrequencyBadge(companies: Company[]): string {
    return `${companies?.length || 1}`;
  }

  // Tooltip position
  getTooltipPosition(
    iconType: 'frequency' | 'fire'
  ): string {

    return this.tooltipPositions[iconType] || 'bottom';
  }

  // Sanitize + wrap code
  sanitize(html: string) {

    if (!html) return '';

    const clean = DOMPurify.sanitize(html);

    return clean.replace(
      /<pre([^>]*)>([\s\S]*?)<\/pre>/g,
      (match, attrs, content) => {
        return `<pre${attrs}><code>${content}</code></pre>`;
      }
    );
  }

  // Highlight code
  ngAfterViewChecked() {

    const blocks =
      this.el.nativeElement.querySelectorAll('pre');

    blocks.forEach((pre: HTMLElement) => {

      const code =
        pre.querySelector('code');

      if (!code) return;

      // prevent duplicate highlight
      if (code.classList.contains('processed')) return;

      // get language from DB
      const language =
        pre.getAttribute('data-language');

      if (language && language !== 'plain') {
        code.classList.add(`language-${language}`);
      }

      hljs.highlightElement(code as HTMLElement);

      code.classList.add('processed');

    });

  }
}
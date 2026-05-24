import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './section-table.html',
  styleUrl: './section-table.scss',
})
export class SectionTable {
  @Input() tableList: Question[] = [];
  expandedRow: number | null = null;

  toggleRow(index: number) {
    this.expandedRow = this.expandedRow === index ? null : index;
  }

  // Get primary company (first in the list)
  getPrimaryCompany(companies: Company[]): Company | null {
    return companies && companies.length > 0 ? companies[0] : null;
  }

  // Check if question has multiple companies
  hasMultipleCompanies(companies: Company[]): boolean {
    return companies && companies.length > 1;
  }

  // Get frequency badge text
  getFrequencyBadge(companies: Company[]): string {
    return `${companies?.length || 1}`;
  }
}

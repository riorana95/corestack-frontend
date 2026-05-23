import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-table',
  imports: [],
  templateUrl: './section-table.html',
  styleUrl: './section-table.scss',
})
export class SectionTable {
  @Input() tableList : any;
  expandedRow: number | null = null;

  toggleRow(index: number) {
  this.expandedRow =
    this.expandedRow === index ? null : index;
}
}

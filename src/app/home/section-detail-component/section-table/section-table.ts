import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-table',
  imports: [],
  templateUrl: './section-table.html',
  styleUrl: './section-table.scss',
})
export class SectionTable {
  @Input() tableList : any;
}

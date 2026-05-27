import { CommonModule }
from '@angular/common';

import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  DocSection,
} from '../../models/doc.model';

@Component({
  selector: 'app-docs-sidebar',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './docs-sidebar.html',

  styleUrl: './docs-sidebar.scss',
})
export class DocsSidebar {

  @Input({ required: true })
  sections!: DocSection[];

  @Input({ required: true })
  activeSectionId!: string;

  @Output()
  navigate =
    new EventEmitter<string>();

  onNavigate(
    sectionId: string
  ): void {

    this.navigate.emit(
      sectionId
    );
  }
}
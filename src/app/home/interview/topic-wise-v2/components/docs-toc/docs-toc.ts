import { CommonModule }
from '@angular/common';

import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  DocArticle,
} from '../../models/doc.model';

@Component({
  selector: 'app-docs-toc',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './docs-toc.html',

  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './docs-toc.scss',
})
export class DocsToc {

  @Input({ required: true })
  articles!: DocArticle[];
}
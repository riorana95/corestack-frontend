import { CommonModule }
from '@angular/common';

import {
  Component,
  Input,
} from '@angular/core';

import {
  DocArticle,
} from '../../models/doc.model';

@Component({
  selector: 'app-docs-toc',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './docs-toc.html',

  styleUrl: './docs-toc.scss',
})
export class DocsToc {

  @Input({ required: true })
  articles!: DocArticle[];
}
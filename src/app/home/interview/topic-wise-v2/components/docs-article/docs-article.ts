import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import {
  DocArticle,
} from '../../models/doc.model';

import { DocsCode } from '../docs-code/docs-code';

@Component({
  selector: 'app-docs-article',

  standalone: true,

  imports: [
    CommonModule,
    DocsCode,
    MarkdownModule,
  ],

  templateUrl: './docs-article.html',

  styleUrl: './docs-article.scss',
})
export class DocsArticle {
  @Input({ required: true })
  article!: DocArticle;
}
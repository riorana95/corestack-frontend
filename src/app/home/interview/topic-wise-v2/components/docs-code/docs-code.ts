import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import {
  AfterViewInit,
} from '@angular/core';

import Prism from 'prismjs';


import 'prismjs/components/prism-java';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-docs-code',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './docs-code.html',

  styleUrl: './docs-code.scss',
})
export class DocsCode implements AfterViewInit {

  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  code!: string;

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}
import { Component, ElementRef , AfterViewInit, AfterViewChecked, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { AddQuestion } from '../../add-question/add-question';
import { MatDialog } from '@angular/material/dialog';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';

@Component({
  selector: 'app-question-card-component',
  imports: [],
  templateUrl: './question-card-component.html',
  styleUrl: './question-card-component.scss',
})
export class QuestionCardComponent implements OnInit  {

  @Input() question: any;
  @Input() companyName?: string | null;
  @Output() updatedData = new EventEmitter<any>();
  @Input() index!: number; // Receives the index from the parent
  private dialog = inject(MatDialog)
  count = 0;
  ngOnInit() {

  }

  constructor(private el: ElementRef){

  }

ngAfterViewInit() {
  setTimeout(() => {

    const blocks =
      this.el.nativeElement.querySelectorAll('pre');

    blocks.forEach((pre: HTMLElement) => {

      const code =
        pre.querySelector('code');

      if (!code) return;

      if (code.classList.contains('processed')) return;

      // get language from DB attribute
      const language =
        pre.getAttribute('data-language');

      if (language && language !== 'plain') {
        code.classList.add(`language-${language}`);
      }

      hljs.highlightElement(code as HTMLElement);

      code.classList.add('processed');

    });

  });
}

  sanitize(html: string) {
    const clean = DOMPurify.sanitize(html);

    return clean.replace(
      /<pre([^>]*)>([\s\S]*?)<\/pre>/g,
      (match, attrs, content) => {
        return `<pre${attrs}><code>${content}</code></pre>`;
      }
    );
  }

  editPopup(question?:any) {
      const dailogRef = this.dialog.open(AddQuestion, {
        panelClass: 'custom-dialog',
        data: { data: question,  isEditMode : true},
        width: '650px',
        maxHeight: '90vh'
      });
      dailogRef.afterClosed().subscribe( res=>{
        this.updatedData.emit(res)
      })
    }

  copyCode(event: Event) {
    const container = (event.target as HTMLElement).closest('.code-container');

    const codeBlock = container?.querySelector('pre code');

    if (!codeBlock) return;

    const text = codeBlock.textContent || '';

    navigator.clipboard.writeText(text);

    // simple feedback
    const btn = event.target as HTMLElement;
    btn.innerText = 'Copied!';
    setTimeout(() => btn.innerText = 'Copy', 1500);
  }
}

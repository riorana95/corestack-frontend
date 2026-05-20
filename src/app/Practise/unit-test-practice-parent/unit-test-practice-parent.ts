import { Component } from '@angular/core';
import { UnitTestPractice } from '../unit-test-practice/unit-test-practice'

@Component({
  selector: 'app-unit-test-practice-parent',
  imports: [UnitTestPractice],
  templateUrl: './unit-test-practice-parent.html',
  styleUrl: './unit-test-practice-parent.scss',
})
export class UnitTestPracticeParent {
  messageForChild = 0;
  messageForPare = 'waiting...';

  messageForParent(message:any){
    this.messageForPare = message;
  }

}

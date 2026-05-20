import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-unit-test-practice',
  imports: [],
  templateUrl: './unit-test-practice.html',
  styleUrl: './unit-test-practice.scss',
})
export class UnitTestPractice {
  ChildToParent = output<void>();
  parentTochild = input.required<number>();

  add(a:number,b:number){
    return a+b;
  }

  divi(a:number,b:number){
    if(b === 0){
      throw new Error("cannot divide by zero");
    }
    return a/b;
  }

  sub(a:number,b:number){
    return a-b;
  }

  mlt(a:number,b:number){
    return a*b;
  }

  test(t:unknown){
    return t
  }

  ontrackURL(){
    this.ChildToParent.emit();
  }



}

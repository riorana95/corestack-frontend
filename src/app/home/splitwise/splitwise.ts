import { Component } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, of,delay, filter, Observable, Subject, switchMap, tap, catchError } from 'rxjs';
import { Login } from "../../login/login";

@Component({
  selector: 'app-splitwise',
  imports: [FormsModule, CommonModule, Login],
  templateUrl: './splitwise.html',
  styleUrl: './splitwise.scss',
})
export class Splitwise {
  groupName = '';
  groupCategory = '';

  constructor() {
    this.performGroupNameSearch();
  }

  // group Name
  searchGroupName$ = new Subject<string>();
  filteredGroupName$!: Observable<string[]>;
  selectedGroupMemberName: Record<string, number> = {}; 
  loader = false;
  totalAmount : number = 0;
  groupMemberNameList = [
    "Rahu",
    "Mehu",
    "Niki",
    "DG",
    "Ashe",
    "Leona",
    "Temmo",
    "Brand",
    "Fiora",
    "Malph",
    "Naruto",
    "Tanjiro",
    "Nezuko",
    "Zeinitsu",
    "Sasuke",
    "Ichigo",
    "Gohan",
    "Goku"
  ];

  currentSearchTerm = '';

  selectMember(name:string){
    this.selectedGroupMemberName[name] = 0;
    const index = this.groupMemberNameList.indexOf(name);
    if (index !== -1) {
      this.groupMemberNameList.splice(index, 1);
    }
    this.searchGroupName$.next(this.currentSearchTerm);
  }

  performGroupNameSearch() {
    this.filteredGroupName$ = this.searchGroupName$.pipe(
      debounceTime(300),
      filter((term: string) => term !== ''),
      tap(() => this.loader = true),
      switchMap((term: string) => {
        const filtered = this.groupMemberNameList.filter((x: string) =>
          x.toLowerCase().includes(term.toLowerCase())
        );
        return of(filtered).pipe(
          // delay(1),
          catchError((err: any) => {
            console.error(err);
            return of([]);
          }),
          tap(() => this.loader = false)
        );
      })
    );
  }

  getFilteredGroupMemberName(MemberName:Event){
    const value = (MemberName?.target as HTMLInputElement).value;
    this.currentSearchTerm = value;
    this.searchGroupName$.next(value)
  }

  splitAmount(){
    const a = "splitEqually";
    if(a === "splitEqually"){
      const selectedMemberObject = Object.keys(this.selectedGroupMemberName);
      const equallyDividedAmount = parseFloat((this.totalAmount / selectedMemberObject.length).toFixed(2));
      selectedMemberObject.forEach(key=>this.selectedGroupMemberName[key] = equallyDividedAmount);
    }else{
      console.log("In-Progress")
    }
  }
}

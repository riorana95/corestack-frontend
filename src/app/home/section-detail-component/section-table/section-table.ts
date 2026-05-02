import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-table',
  imports: [],
  templateUrl: './section-table.html',
  styleUrl: './section-table.scss',
})
export class SectionTable {
  @Input() tableList : any;
  
  ngOnInit(){
    console.log("test213",this.tableList)
  }
  test12233(){
    console.log("test213",this.tableList)
  }
}

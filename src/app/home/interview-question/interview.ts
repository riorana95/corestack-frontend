import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { AnySoaRecord } from 'node:dns';
import { Subject, of } from 'rxjs';
import { debounce, switchMap, filter, debounceTime, catchError } from 'rxjs/operators';
import { InterviewService } from './interview.service';
import { CompanyDetailComponent } from './company-detail-component/company-detail-component';


@Component({
  selector: 'app-interview',
  imports: [CompanyDetailComponent],
  templateUrl: './interview.html',
  styleUrl: './interview.scss',
})
export class Interview implements OnInit {
  count = signal(0);
  result : any[]=[];
  DummyAPIData = signal<any>(null);
  data = [4, 12, 2, [21, 55, 23, [7, 33]], 1, 9];
  search$ = new Subject<string>();
  productList : any;
  loading : any;

  constructor(
    private https: HttpClient,
    private interviewService : InterviewService
  ){
    this.switchMap();
    this.loadJsonDate();
  }

  ngOnInit(){

  }

  loadJsonDate(){
    this.interviewService.loadConfiguration().subscribe({
      next: (res : any) => {
        this.interviewService.question.set(res);
      },error: (err:any) => {
        console.log("Error=>",err);
      },complete: () => {
        console.log();
      }
    })
  }

  flatarray(arr:any){
    let result: any[] = [];
    arr.forEach((item: any)=>
    {
      if(Array.isArray(item)){
        result = result.concat(this.flatarray(item))
      }else{
        result.push(item)
      }
    }
    )
    return this.result = result;
   }

   getdummyAPI(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.https.get<any>(url).subscribe(
      (data:any) =>{
        console.log(data);
        this.DummyAPIData.set(data[0].body);
      },
      (err : any) =>{
        console.log("Error=",err)
      }
    )
   }

 // Rxjs SwitchMap
  switchMap(){
    this.loading = true;
    this.search$.pipe(
      debounceTime(300),
      filter(terms=>terms.trim() !== ''),
      switchMap((terms:any)=> this.dataFun(terms).pipe(
        catchError(err=>{
          console.log(err)
          return of ([])
        })
      )
      )
    ).subscribe((res:any)=>{
      this.loading = false;
      this.productList = res;
    })
  }

  dataFun(terms:any){
    const data = [{ name: 'iPhone' }, { name: 'Samsung' }, { name: 'MacBook' }];

    return of (data.filter(x=>x.name.toLowerCase().includes(terms.toLowerCase())))
  } 

  myCodeSnippet = `form = new FormGroup({
 name: new FormControl('', Validators.required)
});`

}

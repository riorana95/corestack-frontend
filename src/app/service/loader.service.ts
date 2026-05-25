import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading = new BehaviorSubject<boolean>(false);

  loading$ = this.loading.asObservable();

  display(loader:boolean) {
    if(loader){
        this.loading.next(true);
    }else{
        this.loading.next(false);
    }
  }
}
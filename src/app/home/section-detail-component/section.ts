import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Section {
  private apiUrl = environment.apiUrl;
  constructor(private https : HttpClient){

  }

  getFilteredQA(){
    const url = "http://localhost:8080"
    return this.https.get(url+"/allQuestion")
  }
}

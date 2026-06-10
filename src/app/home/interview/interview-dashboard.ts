import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-dashboard',
  imports: [],
  templateUrl: './interview-dashboard.html',
  styleUrl: './interview-dashboard.scss',
})
export class InterviewDashboard {

  constructor(private routes : Router){}

  routeTo(path: string, view?: 'companies' | 'explorer') {
    this.routes.navigate([path], {
      queryParams: view ? { view } : undefined
    })
  }
}


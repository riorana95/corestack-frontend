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

  /**
   * Navigate to a CoreStack product sub-route from the interview
   * dashboard. Same prefix logic as `Home.routeTo` — keeps the
   * template path-agnostic while routing everything under
   * `/corestack/*`. Optionally carries a `view` query param used
   * by the interview workspace to switch between 'companies' and
   * 'explorer' modes.
   */
  routeTo(path: string, view?: 'companies' | 'explorer') {
    this.routes.navigate(['/corestack', ...path.split('/')], {
      queryParams: view ? { view } : undefined
    })
  }
}

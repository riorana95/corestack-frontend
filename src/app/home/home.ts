import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(private routes : Router){}

  /**
   * Navigate to a CoreStack product sub-route.
   *
   * Accepts single- or multi-segment paths (e.g. `'interview-dashboard'`
   * or `'docs/backend/java/java-basics'`) and prefixes them with the
   * `/corestack` namespace so the HTML template can stay path-agnostic.
   */
  routeTo(path: string){
    this.routes.navigate(['/corestack', ...path.split('/')]);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private routes : Router){

  }

  goHome() {
    this.routes.navigate(['home']); // or [''] if your home route is the root path
  }

  logout(){
    this.routes.navigate([''])
  }

}

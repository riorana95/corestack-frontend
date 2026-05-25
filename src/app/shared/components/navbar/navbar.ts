import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

   constructor(private routes : Router){

  }

  goHome() {
    this.routes.navigate(['home']);
  }

  logout(){
    this.routes.navigate([''])
  }

}

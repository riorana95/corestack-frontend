import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

   constructor(private routes : Router,
    private authService :  AuthService
   ){

  }

  goHome() {
    this.routes.navigate(['home']);
  }

  logout(){
    this.authService.logout();
  }

}

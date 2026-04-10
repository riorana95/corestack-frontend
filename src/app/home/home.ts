import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(private routes : Router){}

  routeTo(path:string){
    this.routes.navigate([path])
  }
}

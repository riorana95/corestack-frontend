import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { RouterOutlet } from "@angular/router";
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}

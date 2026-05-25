import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { RouterOutlet } from "@angular/router";
import { Header } from './header/header';
import { LoaderComponent } from './components/global-loader/loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  // constructor(private http: HttpClient)

}

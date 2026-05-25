import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { RouterOutlet } from "@angular/router";
import { GlobalLoader } from './shared/components/global-loader/global-loader';
import { AppShell } from "./shared/layout/app-shell/app-shell";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GlobalLoader, AppShell],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  // constructor(private http: HttpClient)

}

import { Component } from '@angular/core';
import { BackgroundEffects } from "../../components/background-effects/background-effects";
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-app-shell',
  imports: [BackgroundEffects, Navbar],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
})
export class AppShell {

}

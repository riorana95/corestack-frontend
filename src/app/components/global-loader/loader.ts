import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { LoaderService } from "../../service/loader.service";


@Component({
   selector: 'app-loader',
  standalone : true,
  imports: [AsyncPipe],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class LoaderComponent  {

    constructor(public loader : LoaderService){

    }
}
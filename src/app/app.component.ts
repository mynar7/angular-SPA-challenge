import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-SPA-challenge';
  firstContainerImages: object[];
  secondContainerImages: object[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getImages().subscribe(
      (x: any[]) => {
          console.log(x);
          x.sort((a, b) => 0.5 - Math.random());
          this.firstContainerImages = x.filter((x, i) => i >= 0 && i < 9 ? true : false);
          this.secondContainerImages = x.filter((x, i) => i >= 9 && i < 18 ? true : false);
      }
    );
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() images: any[];

  constructor() { }

  ngOnInit() {
  }

  update(imgId) {
    this.images = this.images.map(x => {
      x.enlarged = false;
      return x;
    })

  }

}

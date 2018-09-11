import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() images: any[];
  imageArr: any[];


  constructor() {

  }

  ngOnInit() {
    this.imageArr = this.images.map((x: any, i: number) => {
      let y: any = {};
      i === 3 ? y.enlarged = true : y.enlarged = false;
      y.color = "https://picsum.photos/512/288/?image=" + x.id;
      y.gray = "https://picsum.photos/g/512/288/?image=" + x.id;
      y.id = x.id;
      y.src = y.gray;
      return y;
    })
  }

  handleEmission(id) {
    this.imageArr = this.imageArr.map((x:any) => {
      console.log(x);
      if(x.id === id) {
        x.src = x.color;
        x.enlarged = true;
      } else {
        x.src = x.gray;
        x.enlarged = false;
      }
      return x;
    })
  }

}

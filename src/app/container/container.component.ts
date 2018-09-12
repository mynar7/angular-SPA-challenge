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
      y.color = "https://picsum.photos/512/300/?image=" + x.id;
      y.gray = "https://picsum.photos/g/512/300/?image=" + x.id;
      y.id = x.id;
      y.src = y.gray;
      return y;
    })
  }

  handleEmission(id) {
    let focusItemIndex;
    let prevEnlargedIndex = this.imageArr.reduce((accumulator: any, current: any, index: number) => {
      if(current.enlarged) {
        accumulator = index;
      }
      return accumulator;
    })
    let newImageArr = this.imageArr.map((x: any, i: number) => {
      if (x.id === id) {
        x.src = x.color;
        x.enlarged = true;
        focusItemIndex = i;
      } else {
        x.src = x.gray;
        x.enlarged = false;
      }
      return x;
    })

    if (focusItemIndex > 4) {
      let moveTo;
      let shiftImg = newImageArr.splice(focusItemIndex, 1);
      if (focusItemIndex - prevEnlargedIndex === 4) {
        moveTo = focusItemIndex - 5;
      } else {
        moveTo = focusItemIndex - 4;
      }
      newImageArr.splice(moveTo, 0, shiftImg[0]);
    }

    this.imageArr = newImageArr;
  }


}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() imgUrl: string;
  @Input() imgId: number;
  @Input() cellSize: string;
  @Output() idEmitter = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  update() {
    this.idEmitter.emit(this.imgId);
  }
}

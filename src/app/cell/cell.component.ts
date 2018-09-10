import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() imgUrlColor: string;
  @Input() imgUrlGray: string;
  @Input() enlarged: boolean;
  @Input() author: string;
  @Input() update: Function;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  col0: string = 'col-md-0.1';
  col2: string = 'col-md-1.9';
  constructor() {

  }
  ngOnInit() {
    this.col0 = 'col-md-0.1';
    this.col2 = 'col-md-1.9';
  }



}

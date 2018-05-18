import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  priceState: string = 'filter_content';
  deptState: string = 'filter_content';
  stopsState: string = 'filter_content';
  fairState: string = 'filter_content';
  airlineState: string = 'filter_content';
  dynamicClass: string = 'col-10';

  open_filter(event) {
    let length = event.target.classList.length;
    length = length - 1;
    let className = event.target.classList[length];
    console.log(className);
    if (className == 'priceState') {
      this.priceState = this.priceState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.priceState == 'filter_content') {
        this.dynamicClass = 'col-10';
      } else {
        this.dynamicClass = 'col-8';
      }
      this.deptState = 'filter_content';
      this.stopsState = 'filter_content';
      this.fairState = 'filter_content';
      this.airlineState = 'filter_content';
    }
    if (className == 'deptState') {
      this.deptState = this.deptState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.deptState == 'filter_content') {
        this.dynamicClass = 'col-10';
      } else {
        this.dynamicClass = 'col-8';
      }
      this.priceState = 'filter_content';
      this.stopsState = 'filter_content';
      this.fairState = 'filter_content';
      this.airlineState = 'filter_content';
    }
    if (className == 'stopsState') {
      this.stopsState = this.stopsState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.stopsState == 'filter_content') {
        this.dynamicClass = 'col-10';
      } else {
        this.dynamicClass = 'col-8';
      }
      this.priceState = 'filter_content';
      this.deptState = 'filter_content';
      this.fairState = 'filter_content';
      this.airlineState = 'filter_content';
    }
    if (className == 'fairState') {
      this.fairState = this.fairState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.fairState == 'filter_content') {
        this.dynamicClass = 'col-10';
      } else {
        this.dynamicClass = 'col-8';
      }
      this.priceState = 'filter_content';
      this.deptState = 'filter_content';
      this.stopsState = 'filter_content';
      this.airlineState = 'filter_content';
    }
    if (className == 'airlineState') {
      this.airlineState = this.airlineState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.airlineState == 'filter_content') {
        this.dynamicClass = 'col-10';
      } else {
        this.dynamicClass = 'col-8';
      }
      this.priceState = 'filter_content';
      this.deptState = 'filter_content';
      this.stopsState = 'filter_content';
      this.fairState = 'filter_content';
    }
    // console.log(className);
    // this.menuState = this.menuState === 'filter_content' ? 'fil' : 'filter_content';
  }
}

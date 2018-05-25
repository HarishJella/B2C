import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

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
  busTypeState: string = 'filter_content';
  busBrandState: string = 'filter_content';
  deptState: string = 'filter_content';
  boardingState: string = 'filter_content';
  busOperatorState: string = 'filter_content';
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

      this.busTypeState = 'filter_content';
      this.busBrandState = 'filter_content';
      this.deptState = 'filter_content';
      this.boardingState = 'filter_content';
      this.busOperatorState = 'filter_content';
    }
    if (className == 'busTypeState') {
      this.busTypeState = this.busTypeState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.busTypeState == 'filter_content') {
        this.dynamicClass = 'col-10';
      } else {
        this.dynamicClass = 'col-8';
      }
      this.priceState = 'filter_content';

      this.busBrandState = 'filter_content';
      this.deptState = 'filter_content';
      this.boardingState = 'filter_content';
      this.busOperatorState = 'filter_content';
    }
    if (className == 'busBrandState') {
      this.busBrandState = this.busBrandState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.busBrandState == 'filter_content') {
        this.dynamicClass = 'col-10';
      } else {
        this.dynamicClass = 'col-8';
      }
      this.priceState = 'filter_content';
      this.busTypeState = 'filter_content';

      this.deptState = 'filter_content';
      this.boardingState = 'filter_content';
      this.busOperatorState = 'filter_content';
    }
    if (className == 'deptState') {
      this.deptState = this.deptState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.deptState == 'filter_content') {
        this.dynamicClass = 'col-10';
      } else {
        this.dynamicClass = 'col-8';
      }
      this.priceState = 'filter_content';
      this.busTypeState = 'filter_content';
      this.busBrandState = 'filter_content';

      this.boardingState = 'filter_content';
      this.busOperatorState = 'filter_content';
    }
    if (className == 'boardingState') {
      this.boardingState = this.boardingState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.boardingState == 'filter_content') {
        this.dynamicClass = 'col-10';
      } else {
        this.dynamicClass = 'col-8';
      }
      this.priceState = 'filter_content';
      this.busTypeState = 'filter_content';
      this.busBrandState = 'filter_content';
      this.deptState = 'filter_content';

      this.busOperatorState = 'filter_content';

    }
    if (className == 'busOperatorState') {
      this.busOperatorState = this.busOperatorState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.busOperatorState == 'filter_content') {
        this.dynamicClass = 'col-10';
      } else {
        this.dynamicClass = 'col-8';
      }
      this.priceState = 'filter_content';
      this.busTypeState = 'filter_content';
      this.busBrandState = 'filter_content';
      this.deptState = 'filter_content';
      this.boardingState = 'filter_content';


    }
    // console.log(className);
    // this.menuState = this.menuState === 'filter_content' ? 'fil' : 'filter_content';
  }
}


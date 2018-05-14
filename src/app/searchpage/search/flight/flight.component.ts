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

  menuState: string = 'filter_content';


  open_filter(item) {
    this.menuState = this.menuState === 'filter_content' ? 'fil' : 'filter_content';
    console.log(item);
  }



}

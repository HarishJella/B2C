import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flightbooking',
  templateUrl: './flightbooking.component.html',
  styleUrls: ['./flightbooking.component.scss']
})
export class FlightbookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tab1: string = 'tabD';
  tab2: string = 'tabN';
  tab3: string = 'tabN';


  trvl_inf(event) {
    let length = event.target.classList.length;
    length = length - 1;
    let className = event.target.classList[length];
    if (className == 'tab1') {
      this.tab2 = 'tabN';
      this.tab3 = 'tabN';
      if ((this.tab2 === 'tabN') && (this.tab3 === 'tabN')) {
        this.tab1 = 'tabD';
      }
      else {
        this.tab1 = this.tab1 === 'tabN' ? 'tabD' : 'tabN';
      }

    }
    if (className == 'tab2') {
      this.tab1 = 'tabN';
      this.tab3 = 'tabN';
      if ((this.tab1 === 'tabN') && (this.tab3 === 'tabN')) {
        this.tab2 = 'tabD';
      }
      else {
        this.tab2 = this.tab2 === 'tabN' ? 'tabD' : 'tabN';
      }

    }
    if (className == 'tab3') {

      this.tab1 = 'tabN';
      this.tab2 = 'tabN';
      if ((this.tab1 == 'tabN') && (this.tab2 == 'tabN')) {
        this.tab3 = 'tabD';
      }
      else {
        this.tab3 = this.tab3 === 'tabN' ? 'tabD' : 'tabN';
      }


    }
  }


}

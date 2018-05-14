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


  menuState: string = 'filter_content';


  open_filter(item) {
    this.menuState = this.menuState === 'filter_content' ? 'fil' : 'filter_content';
    console.log(item);
  }



}

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { FlightTemplateComponent } from '../Templates/flight-template/flight-template.component';
import { BusTemplateComponent } from '../Templates/bus-template/bus-template.component';
import { HotelTemplateComponent } from '../Templates/hotel-template/hotel-template.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']

})
export class SearchComponent implements OnInit {





  constructor() {

  }

  ngOnInit() {
  }


  menuState: string = 'filter_content';


  open_filter(item) {
    this.menuState = this.menuState === 'filter_content' ? 'fil' : 'filter_content';
    console.log(item);
  }



} 

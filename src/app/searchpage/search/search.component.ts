import { Component, OnInit } from '@angular/core';
import { FlightTemplateComponent } from '../Templates/flight-template/flight-template.component';
import { BusTemplateComponent } from '../Templates/bus-template/bus-template.component';
import { HotelTemplateComponent } from '../Templates/hotel-template/hotel-template.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  events: string[] = [];
  opened: boolean = false;
  item: boolean;



  constructor() {

  }

  ngOnInit() {
  }



  open_filter(item) {


  }
}

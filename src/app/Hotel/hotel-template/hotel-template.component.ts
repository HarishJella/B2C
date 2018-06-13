import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-template',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hotel-template.component.html',
  styleUrls: ['./hotel-template.component.scss']
})
export class HotelTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  @Input() private Hotel;
  @Input('hotel_grid') hotel_grid: number;
  @Input('hotel_list') hotel_list: string;
  @Input('hotel_map') hotel_map: string;
  //  hotel_grid: string = 'fadeIn';
  // hotel_list: string = 'd-none';
  @Output() public hotelObject = new EventEmitter();

  getHotel(Hotel) {
    console.log(this.Hotel);
    this.hotelObject.emit(this.Hotel);
  }

}

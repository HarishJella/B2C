import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

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
  amenitiesState: string = 'filter_content';
  locationState: string = 'filter_content';
  ratingState: string = 'filter_content';
  propertyTypeState: string = 'filter_content';



  open_filter(event) {
    let length = event.target.classList.length;
    length = length - 1;
    let className = event.target.classList[length];

    if (className == 'priceState') {
      this.priceState = this.priceState === 'filter_content' ? 'fil' : 'filter_content';


      this.amenitiesState = 'filter_content';
      this.locationState = 'filter_content';
      this.ratingState = 'filter_content';
      this.propertyTypeState = 'filter_content';

    }
    if (className == 'amenitiesState') {
      this.amenitiesState = this.amenitiesState === 'filter_content' ? 'fil' : 'filter_content';

      this.priceState = 'filter_content';

      this.locationState = 'filter_content';
      this.ratingState = 'filter_content';
      this.propertyTypeState = 'filter_content';
    }
    if (className == 'locationState') {
      this.locationState = this.locationState === 'filter_content' ? 'fil' : 'filter_content';

      this.priceState = 'filter_content';
      this.amenitiesState = 'filter_content';

      this.ratingState = 'filter_content';
      this.propertyTypeState = 'filter_content';
    }
    if (className == 'ratingState') {
      this.ratingState = this.ratingState === 'filter_content' ? 'fil' : 'filter_content';

      this.priceState = 'filter_content';
      this.amenitiesState = 'filter_content';
      this.locationState = 'filter_content';

      this.propertyTypeState = 'filter_content';
    }
    if (className == 'propertyTypeState') {
      this.propertyTypeState = this.propertyTypeState === 'filter_content' ? 'fil' : 'filter_content';

      this.priceState = 'filter_content';
      this.amenitiesState = 'filter_content';
      this.locationState = 'filter_content';
      this.ratingState = 'filter_content';


    }

    // console.log(className);
    // this.menuState = this.menuState === 'filter_content' ? 'fil' : 'filter_content';


  }
}

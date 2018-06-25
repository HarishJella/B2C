import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { hotelModifySearch } from '../hotel.modify.component';

import { MatCheckbox } from '@angular/material';


// import { hotelInterface } from '../hotel.interface';

// import { catchError, retry } from 'rxjs/operators';


declare var $: any;
@Component({
  selector: 'app-hotel',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {
  stickyTop: string = "sticky-top";
  public passengers_state;
  HotelDetails: any;
  HotelDetailsOriginal: any;
  filterHotelDetails = [];
  error: any;
  showHotelLoader: boolean = true;
  HotelDetailsLoop: string = 'HotelDetails';
  elementID;
  // Post Request -> body  from service as Observable
  requestBody: any;

  constructor(public dialog: MatDialog,  ) { }

  ngOnInit() {
    
  }
 
  openDialog() {
    const dialogRef = this.dialog.open(hotelModifySearch, {
      height: 'auto'
    });
    this.stickyTop = "";
    this.passengers_state = 'd-none fadeOutRightBig';
    dialogRef.afterClosed().subscribe(result => {
      this.stickyTop = "sticky-top";
      this.passengers_state = 'd-none fadeOutRightBig';
      this.showHotelLoader = true;
     
      // console.log(`Dialog result: ${result}`);
    });

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
  dynamicClass: string = 'col-11';
  hotelresult: string = 'hotelresult3';
  hotelGridView: string = "gridView";
  hotelListView: string = "";
  hotel_grid: string = 'fadeIn';
  hotel_list: string = 'd-none';
  hotel_map: string = 'd-none';

  open_filter(event) {
    let length = event.target.classList.length;
    length = length - 1;
    let className = event.target.classList[length];
    console.log(className);
    if (className == 'priceState') {
      this.priceState = this.priceState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.priceState == 'filter_content') {
        this.dynamicClass = 'col-11';
        this.hotelresult = 'hotelresult3';
      } else {
        this.dynamicClass = 'col-9';
        this.hotelresult = 'hotelresult2';
      }
      this.amenitiesState = 'filter_content';
      this.locationState = 'filter_content';
      this.ratingState = 'filter_content';
      this.propertyTypeState = 'filter_content';
    }
    if (className == 'amenitiesState') {
      this.amenitiesState = this.amenitiesState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.amenitiesState == 'filter_content') {
        this.dynamicClass = 'col-11';
        this.hotelresult = 'hotelresult3';
      } else {
        this.dynamicClass = 'col-9';
        this.hotelresult = 'hotelresult2';
      }
      this.priceState = 'filter_content';
      this.locationState = 'filter_content';
      this.ratingState = 'filter_content';
      this.propertyTypeState = 'filter_content';
    }
    if (className == 'locationState') {
      this.locationState = this.locationState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.locationState == 'filter_content') {
        this.dynamicClass = 'col-11';
        this.hotelresult = 'hotelresult3';
      } else {
        this.dynamicClass = 'col-9';
        this.hotelresult = 'hotelresult2';
      }
      this.priceState = 'filter_content';
      this.amenitiesState = 'filter_content';
      this.ratingState = 'filter_content';
      this.propertyTypeState = 'filter_content';
    }
    if (className == 'ratingState') {
      this.ratingState = this.ratingState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.ratingState == 'filter_content') {
        this.dynamicClass = 'col-11';
        this.hotelresult = 'hotelresult3';
      } else {
        this.dynamicClass = 'col-9';
        this.hotelresult = 'hotelresult2';
      }
      this.priceState = 'filter_content';
      this.amenitiesState = 'filter_content';
      this.locationState = 'filter_content';
      this.propertyTypeState = 'filter_content';
    }
    if (className == 'propertyTypeState') {
      this.propertyTypeState = this.propertyTypeState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.propertyTypeState == 'filter_content') {
        this.dynamicClass = 'col-11';
        this.hotelresult = 'hotelresult3';
      } else {
        this.dynamicClass = 'col-9';
        this.hotelresult = 'hotelresult2';
      }
      this.priceState = 'filter_content';
      this.amenitiesState = 'filter_content';
      this.locationState = 'filter_content';
      this.ratingState = 'filter_content';
    }
    // console.log(className);
    // this.menuState = this.menuState === 'filter_content' ? 'fil' : 'filter_content';
  }

  // Grid view
  gridView() {
    this.hotelGridView = 'gridView';
    this.hotelListView = '';
    this.hotel_grid = 'd-block fadeIn';
    this.hotel_list = 'd-none fadeOut';
    this.hotel_map = 'd-none fadeOut';
  }
  // List view
  listView() {
    this.hotelGridView = '';
    this.hotelListView = 'listView';
    this.hotel_grid = 'd-none fadeOut';
    this.hotel_list = 'd-flex fadeIn';
    this.hotel_map = 'd-none fadeOut';
  }
  // Map view
  mapView() {
    this.hotelGridView = '';
    this.hotelListView = 'listView';
    this.hotel_grid = 'd-none fadeOut';
    this.hotel_list = 'd-none fadeOut';
    this.hotel_map = 'd-block fadeIn';
  }




  // Hotel Filter section

  // 1> Rating Filter
  ratingFilter(filter: string) {
    var target = $("#rating" + filter).find('input').attr('aria-checked');
    this.HotelDetailsOriginal = this.HotelDetails;
    console.log(target);
    // console.log($(this).find('#rating' + filter + '-input'));
    if (target == 'false') {
      this.filterHotelDetails.unshift.apply(this.filterHotelDetails, (this.HotelDetailsOriginal.filter(
        data => {
          return data.Rating.includes(filter);
        }
      )))
      console.log(this.filterHotelDetails);
    } if (target == 'true') {
      this.filterHotelDetails.splice(this.filterHotelDetails.findIndex(
        data => {
          return data.Rating.includes(filter);
        }
      ));
      console.log(this.filterHotelDetails);
    }
  }

  amenitiesFilter(event) {
    console.log(event.target.id);
  }



}


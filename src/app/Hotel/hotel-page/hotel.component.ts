import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { hotelModifySearch } from '../hotel.modify.component';
import { Hotel, HotelServiceService } from '../hotel-service/hotel-service.service';
import { MatCheckbox } from '@angular/material';


// import { hotelInterface } from '../hotel.interface';

// import { catchError, retry } from 'rxjs/operators';



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
  requestBody: any;
  // Post Request -> body 


  //  this.requestBody = {
  //   "AgentDetails": {
  //     "ApiKey": "WE01ABXzy08USER",
  //     "ApiSecret": "8j8Qh6Y6%2f3cbT%2bmIOazO1A%3d%3d",
  //     "AgentType": "INTERNAL",
  //     "AppType": "B2B",
  //     "BranchID": "B0001",
  //     "AgentId": "WCKUL0200101",
  //     "SequenceId": "11059",
  //     "TerminalId": "WCKUL020010108",
  //     "UserName": "anbu@webaxyz.com",
  //     "IPAddress": "192.168.31.63",
  //     "LoginReference": "NecA3T4vCZqbjZifUFQlwjh4%2fZswJLghjZYRLkiyoOQ%3d",
  //     "TerminalType": "W",
  //     "CurrencyCode": "MYR"
  //   },
  //   "Vendor": "HOTELBED",
  //   "Destination": "Athens, Greece",
  //   "CheckIn": "18-07-2018",
  //   "CheckOut": "21-07-2018",
  //   "Rooms": [
  //     {
  //       "AD": 2,
  //       "CH": 1,
  //       "CHAge": [
  //         8
  //       ]
  //     }
  //   ],
  //   "SearchID": 0,
  //   "countryCode": "IN",
  //   "ClientCountryId": "27"
  // };


  constructor(public dialog: MatDialog, private HotelData: HotelServiceService, ) {

  }

  ngOnInit() {
    this.showHotelDetails();

  }

  // Getting response data from hotel-service.service.ts
  showHotelDetails() {
    this.HotelData.currentRequestBodySource.subscribe(requestBody => this.requestBody = requestBody);
    this.HotelData.getHotelDeatils(this.requestBody).subscribe(
      data => {
        let dataNew = data;
        this.HotelDetails = JSON.parse(data.response);
        this.HotelDetailsOriginal = this.HotelDetails;
        this.showHotelLoader = false;
        // console.log(this.HotelDetails = JSON.parse(data.response));
      },
      err => console.log(err),
      () => console.log('Request Completed')
    );
  }





  filterHotel(e, filter: string) {
    var target = e;
    this.HotelDetailsOriginal = this.HotelDetails;
    console.log(target);
    if (target == 'false') {
      this.filterHotelDetails.unshift.apply(this.filterHotelDetails, (this.HotelDetailsOriginal.filter(
        data => {
          return data.Rating.includes(filter);
        }
      )))

    } if (target == 'true') {
      for (var i = 0; i < this.filterHotelDetails.length; i++) {
        if (this.filterHotelDetails[i].Rating === filter) {
          this.filterHotelDetails.splice(i, 1);
          console.log(this.filterHotelDetails);
          break;
        }
      }
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(hotelModifySearch, {
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.stickyTop = "sticky-top";
      this.passengers_state = 'd-none fadeOutRightBig';
      console.log(`Dialog result: ${result}`);
    });
    this.stickyTop = "";
    this.passengers_state = 'd-none fadeOutRightBig';
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


}


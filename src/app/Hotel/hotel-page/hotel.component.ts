import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { hotelModifySearch } from '../hotel.modify.component';
import { Hotel, HotelServiceService } from '../hotel-service/hotel-service.service';
import { MatCheckbox } from '@angular/material';
import * as jQuery from 'jquery';

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

  constructor(public dialog: MatDialog, private HotelData: HotelServiceService, ) { }

  ngOnInit() {
    this.HotelData.currentRequestBodySource.subscribe(requestBody => this.requestBody = requestBody);
    this.showHotelDetails();
  }

  // subscribeing to getHotelDetails method in hotel-service.service.ts to get Hotel Details
  showHotelDetails() {
    this.HotelData.getHotelDetails(this.requestBody).subscribe(
      data => {
        this.HotelDetails = JSON.parse(data.response);
        this.HotelDetailsOriginal = this.HotelDetails;
        this.showHotelLoader = false;
      },
      err => console.log(err),
      // () => console.log('Request Completed')
    );
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
      this.showHotelDetails();
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
  // 1> Price Filteration
  val = 1000;
  priceFilterArray = [];
  priceFilteration() {
    console.log(this.val);
    let priceValue = this.val;
    console.log(priceValue);
    this.HotelDetailsOriginal = this.HotelDetails;
    if (priceValue) {
      this.priceFilterArray.unshift.apply(this.priceFilterArray, (this.HotelDetailsOriginal.filter(
        data => {
          if (data.StartAmount <= priceValue) {
            return data.StartAmount.includes(data.StartAmount);
          }
        }
      )))
      this.filterHotelDetails.unshift.apply(this.filterHotelDetails, this.priceFilterArray);
    } else {
      this.filterHotelDetails.unshift.apply(this.filterHotelDetails, (this.HotelDetailsOriginal.filter(
        data => {
          if (data.StartAmount >= priceValue) {
            return data.StartAmount.includes(priceValue);
          }
        }
      )))
    }
    this.filterHotelDetails.sort(function (a, b) {
      var nameA = parseInt(a.StartAmount); // ignore upper and lowercase
      var nameB = parseInt(b.StartAmount); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
  }

  // 2> Rating Filter
  ratingFilterArray = [];
  ratingFilter(filter: string) {
    var target = $("#rating" + filter).find('input').attr('aria-checked');
    this.HotelDetailsOriginal = this.HotelDetails;

    if (target == 'false') {
      this.ratingFilterArray.unshift.apply(this.ratingFilterArray, (this.HotelDetailsOriginal.filter(
        data => {
          return data.Rating.includes(filter);
        }
      )))
      this.filterHotelDetails.unshift.apply(this.filterHotelDetails, this.ratingFilterArray);
      // console.log(this.ratingFilterArray);
      // console.log(this.filterHotelDetails);
    } if (target == 'true') {
      this.filterHotelDetails.splice(this.filterHotelDetails.findIndex(
        data => {
          return data.Rating.includes(filter);
        }
      ));
      // console.log(this.filterHotelDetails);
    }
  }

  // 3> Location Filter
  locationFilterArray = [];
  locationFilter(location) {
    let id = location.HotelID;
    let value = $("#" + id).find('input').attr('aria-checked');
    this.HotelDetailsOriginal = this.HotelDetails;

    if (value == 'false') {
      this.locationFilterArray.unshift.apply(this.locationFilterArray, (this.HotelDetailsOriginal.filter(
        data => {
          return data.FullAddress.includes(location.FullAddress);
        }
      )))

      // this.filterHotelDetails.push(this.locationFilterArray);
      // function removeDuplicates(myArr, prop) {
      //   return myArr.filter((obj, pos, arr) => {
      //     return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
      //   });
      // }
      this.locationFilterArray = this.removeDuplicates(this.locationFilterArray, location.FullAddress);

      console.log(this.locationFilterArray);
      this.filterHotelDetails.unshift.apply(this.filterHotelDetails, this.locationFilterArray);

      console.log(this.filterHotelDetails);
    } if (value == 'true') {
      this.filterHotelDetails.splice(this.filterHotelDetails.findIndex(
        data => {
          return data.FullAddress.includes(location.FullAddress);
        }
      ));
      console.log(this.filterHotelDetails);
    }
  }



  // 4> Amenities Filter
  amenitiesFilterArray = [];
  amenitiesFilter(id: number) {
    var target = $("#amenities" + id).find('input').attr('aria-checked');
    this.HotelDetailsOriginal = this.HotelDetails;
    if (target == 'false') {
      this.amenitiesFilterArray.unshift.apply(this.amenitiesFilterArray, (this.HotelDetailsOriginal.filter(
        data => {
          if (data.Amenities != null) {
            return data.Amenities.ID.includes(id);
          }
        }
      )))
      this.filterHotelDetails.unshift.apply(this.filterHotelDetails, this.amenitiesFilterArray);
      // console.log(this.filterHotelDetails);
    } if (target == 'true') {
      this.filterHotelDetails.splice(this.filterHotelDetails.findIndex(
        data => {
          if (data.Amenities != null) {
            return data.Amenities.ID.includes(id);
          }
        }
      ));
    }
  }


  // sorting
  // 1> Recommended
  Recommended() {
    this.HotelDetails.sort(function (a, b) {
      var ratingA = parseInt(a.Rating); // ignore upper and lowercase
      var ratingB = parseInt(b.Rating); // ignore upper and lowercase

      var priceA = parseInt(a.StartAmount);
      var priceB = parseInt(b.StartAmount);
      if (ratingA < ratingB && priceA < priceB) {
        return 1;
      }
      if (ratingA > ratingB && priceA > priceB) {
        return -1;
      }
      return 0;
    });

    this.filterHotelDetails.sort(function (a, b) {
      var ratingA = parseInt(a.Rating); // ignore upper and lowercase
      var ratingB = parseInt(b.Rating); // ignore upper and lowercase

      if (ratingA < ratingB) {
        return 1;
      }
      if (ratingA > ratingB) {
        return -1;
      }
      return 0;
    });
  }

  // 2> Alphabetic
  Alphabetic() {
    this.HotelDetails.sort(function (a, b) {
      var nameA = a.HotelName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.HotelName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.filterHotelDetails.sort(function (a, b) {
      var nameA = a.HotelName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.HotelName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  // 2> Rating
  Rating() {
    this.HotelDetails.sort(function (a, b) {
      var nameA = parseInt(a.Rating); // ignore upper and lowercase
      var nameB = parseInt(b.Rating); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });

    this.filterHotelDetails.sort(function (a, b) {
      var nameA = parseInt(a.Rating); // ignore upper and lowercase
      var nameB = parseInt(b.Rating); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
  }

  // 3> Price
  Price() {
    this.HotelDetails.sort(function (a, b) {
      var nameA = parseInt(a.StartAmount); // ignore upper and lowercase
      var nameB = parseInt(b.StartAmount); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    this.filterHotelDetails.sort(function (a, b) {
      var nameA = parseInt(a.StartAmount); // ignore upper and lowercase
      var nameB = parseInt(b.StartAmount); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }


  // Remove same object valu from filterHotelDetails
  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

}


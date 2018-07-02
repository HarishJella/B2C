import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { hotelModifySearch } from '../hotel.modify.component';
import { HotelServiceService } from '../hotel-service/hotel-service.service';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
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
  filterHotelDetails = [];
  error: any;
  showHotelLoader: boolean = true;
  HotelDetailsLoop: string = 'HotelDetails';
  elementID;
  // Post Request -> body  from service as Observable
  requestBody: any;
  filt_min_price: number = 0;
  filt_max_price: number = 0;
  Amenities;
  //Variables for Filter Location array
  filLoc = [];
  Locmap = new Map();
  //Variables for Filter Amenities array
  filAmits = [];
  Amitsmap = new Map();
  filterFormGroup: FormGroup;

  constructor(public dialog: MatDialog, private HotelData: HotelServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.HotelData.currentRequestBodySource.subscribe(requestBody => this.requestBody = requestBody);
    this.showHotelDetails();
    this.filterFormGroup = this.formBuilder.group({
      rating: this.formBuilder.array([]),
      location: this.formBuilder.array([]),
      price: this.formBuilder.array([]),
      amenities: this.formBuilder.array([])
    });
  }

  // subscribeing to getHotelDetails method in hotel-service.service.ts to get Hotel Details
  showHotelDetails() {
    this.HotelData.getHotelDetails(this.requestBody).subscribe(
      data => {
        this.HotelDetails = JSON.parse(data.response);
        this.HotelDetails.map(el => {
          el.hidden = true;
        })
        // console.log(...this.HotelDetails);

        //Getting max and min HotelPrice from response data
        this.filt_max_price = Math.round(Math.max.apply(Math, this.HotelDetails.map(function (o) { return o.StartAmount; })));
        this.filt_min_price = Math.round(Math.min.apply(Math, this.HotelDetails.map(function (o) { return o.StartAmount; })));

        //Making Location unique from all Hotel and pushing it filLoc(filter location) array
        for (let Location of this.HotelDetails) {
          this.Locmap.set(Location.FullAddress, Location);
        }
        this.Locmap.forEach(data => {
          this.filLoc.push(data);
        });

        //Making Amenities unique from all Hotel and pushing it filAmits(filter amenities) array
        this.HotelDetails.forEach(element => {
          if (element.Amenities != null || element.Amenities != undefined) {
            for (let Amenities of element.Amenities) {
              this.Amitsmap.set(Amenities.ID, Amenities);
            }
          }
        });
        this.Amitsmap.forEach(data => {
          this.filAmits.push(data);
        });
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
      this.showHotelDetails();
      this.showHotelLoader = true;
    });
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    if (value >= 100000) {
      return Math.round(value / 100000) + 'L';
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

  priceFilterArray = [];
  priceFilteration(event) {

    let priceValue = event.value;
    const price = <FormArray>this.filterFormGroup.get('price') as FormArray;

    if (priceValue) {
      price.push(new FormControl(event.value));
      this.filter_HotelDetails();
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
  ratingFilter(event) {
    const rating = <FormArray>this.filterFormGroup.get('rating') as FormArray;
    if (event.checked) {
      rating.push(new FormControl(event.source.value))
    } else {
      const i = rating.controls.findIndex(x => x.value === event.source.value);
      rating.removeAt(i);
    }
    this.filter_HotelDetails();
  }

  // 3> Location Filter
  locationFilterArray = [];
  locationFilter(event) {

    const location = <FormArray>this.filterFormGroup.get('location') as FormArray;
    if (event.checked) {
      location.push(new FormControl(event.source.id))
    } else {
      const i = location.controls.findIndex(x => x.value === event.source.id);
      location.removeAt(i);
    }
    this.filter_HotelDetails();
  }


  // 4> Amenities Filter
  amenitiesFilterArray = [];
  amenitiesFilter(event, id: number) {
    // var target = $("#amenities" + id).find('input').attr('aria-checked');
    var target = event;
    const amenities = <FormArray>this.filterFormGroup.get('amenities') as FormArray;
    if (event.checked) {
      amenities.push(new FormControl(id))
    } else {
      const i = amenities.controls.findIndex(x => x.value === id);
      amenities.removeAt(i);
    }
    this.filter_HotelDetails();
  }


  // Remove same object valu from filterHotelDetails
  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  filter_HotelDetails() {
    let price = this.filterFormGroup.value.price;
    let amenities = this.filterFormGroup.value.amenities;
    let rating = this.filterFormGroup.value.rating;
    let location = this.filterFormGroup.value.location;

    for (let Hotel of this.HotelDetails) {
      Hotel.hidden = false;
      let status: boolean = false;

      if (price.length > 0) {
        for (let p = 0; p < price.length; p++) {
          if ((price.length - 1) == p && price[price.length - 1] != 0) {
            if (parseInt(Hotel.StartAmount) <= price[price.length - 1]) {
              status = true;
            }
          }
        }
      }

      if (price.length == 0) {
        if (parseInt(Hotel.StartAmount) <= this.filt_max_price) {
          status = true;
        }
      }

      if (status) {
        if (amenities.length > 0) {
          for (let amt of amenities.length) {
            if (Hotel.Amenities.length > 0 || (Hotel.Amenities != null || Hotel.Amenities != undefined)) {
              for (let aminit of Hotel.Amenities) {
                if (aminit.ID == amt) {
                  status = true;
                  break;
                } else {
                  status = false;
                }
              };
            } else {
              status = false;
            }
          }
        }
      }

      if (status) {
        if (rating.length > 0 || rating.length != 0) {
          for (let rate of rating) {
            if (parseInt(Hotel.Rating) == rate) {
              status = true;
              break;
            } else {
              status = false;
            }
          }
        }
      }

      if (status) {
        if (location.length > 0) {
          for (let loc of location) {
            if (Hotel.FullAddress == loc) {
              status = true;
              break;
            } else {
              status = false;
            }
          }
        }
      }

      if (status) {
        Hotel.hidden = true;
      }

    };
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
  }

}

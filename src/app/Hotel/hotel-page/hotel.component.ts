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
  public HotelDetailsOriginal: any;
  filterHotelDetails = [];
  error: any;
  showHotelLoader: boolean = true;
  HotelDetailsLoop: string = 'HotelDetails';
  elementID;
  // Post Request -> body  from service as Observable
  requestBody: any;

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
      this.showHotelDetails();
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
  // 1> Price Filteration

  priceFilterArray = [];
  priceFilteration(event) {
    console.log(event.value);
    let priceValue = event.value;

    const price = <FormArray>this.filterFormGroup.get('price') as FormArray;

    if (priceValue) {
      price.push(new FormControl(event.value));
      this.filter();
    }
    console.log(price);



    // this.filterHotelData();
    // this.HotelDetailsOriginal = this.HotelDetails;
    // if (priceValue) {
    //   this.priceFilterArray.unshift.apply(this.priceFilterArray, (this.HotelDetailsOriginal.filter(
    //     data => {
    //       if (data.StartAmount <= priceValue) {
    //         return data.StartAmount.includes(data.StartAmount);
    //       }
    //     }
    //   )))
    //   this.filterHotelDetails.unshift.apply(this.filterHotelDetails, this.priceFilterArray);
    // } else {
    //   this.filterHotelDetails.unshift.apply(this.filterHotelDetails, (this.HotelDetailsOriginal.filter(
    //     data => {
    //       if (data.StartAmount >= priceValue) {
    //         return data.StartAmount.includes(priceValue);
    //       }
    //     }
    //   )))
    // }
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
    // var target = $("#rating" + filter).find('input').attr('aria-checked');
    // var target = event.checked;
    // this.HotelDetailsOriginal = this.HotelDetails;

    // if (target === true) {
    //   this.ratingFilterArray.unshift.apply(this.ratingFilterArray, (this.HotelDetailsOriginal.filter(
    //     data => {
    //       return data.Rating.includes(event.source.value);
    //     }
    //   )))
    //   this.filterHotelDetails.unshift.apply(this.filterHotelDetails, this.ratingFilterArray);
    // } if (target === false) {
    //   this.filterHotelDetails.splice(this.filterHotelDetails.findIndex(
    //     data => {
    //       return data.Rating.includes(event.source.value);
    //     }
    //   ));
    // }
    const rating = <FormArray>this.filterFormGroup.get('rating') as FormArray;

    if (event.checked) {
      rating.push(new FormControl(event.source.value))
    } else {
      const i = rating.controls.findIndex(x => x.value === event.source.value);
      rating.removeAt(i);
    }
    this.filter();
    // this.filterHotelData();
  }

  // 3> Location Filter
  locationFilterArray = [];
  locationFilter(location) {

    const location1 = <FormArray>this.filterFormGroup.get('location') as FormArray;

    if (location.FullAddress != null || location.FullAddress != undefined) {
      location1.push(new FormControl(location.FullAddress))
    } else {
      const i = location.controls.findIndex(x => x.value === location.FullAddress);
      location1.removeAt(i);
    }
    // let id = location.HotelID;
    // let value = $("#" + id).find('input').attr('aria-checked');
    // this.HotelDetailsOriginal = this.HotelDetails;

    // if (value == 'false') {
    //   this.locationFilterArray.unshift.apply(this.locationFilterArray, (this.HotelDetailsOriginal.filter(
    //     data => {
    //       return data.FullAddress.includes(location.FullAddress);
    //     }
    //   )))

    // this.filterHotelDetails.push(this.locationFilterArray);
    // function removeDuplicates(myArr, prop) {
    //   return myArr.filter((obj, pos, arr) => {
    //     return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    //   });
    // }
    //   this.locationFilterArray = this.removeDuplicates(this.locationFilterArray, location.FullAddress);

    //   console.log(this.locationFilterArray);
    //   this.filterHotelDetails.unshift.apply(this.filterHotelDetails, this.locationFilterArray);

    //   console.log(this.filterHotelDetails);
    // } if (value == 'true') {
    //   this.filterHotelDetails.splice(this.filterHotelDetails.findIndex(
    //     data => {
    //       return data.FullAddress.includes(location.FullAddress);
    //     }
    //   ));
    //   console.log(this.filterHotelDetails);
    // }
    // this.filterHotelData();
  }



  // 4> Amenities Filter
  amenitiesFilterArray = [];
  amenitiesFilter(event, id: number) {
    // var target = $("#amenities" + id).find('input').attr('aria-checked');
    var target = event;
    // this.HotelDetailsOriginal = this.HotelDetails;
    // if (target === true) {
    //   this.amenitiesFilterArray.unshift.apply(this.amenitiesFilterArray, (this.HotelDetailsOriginal.filter(
    //     data => {
    //       if (data.Amenities != null) {
    //         return data.Amenities.ID.includes(id);
    //       }
    //     }
    //   )))
    //   this.filterHotelDetails.unshift.apply(this.filterHotelDetails, this.amenitiesFilterArray);
    //   // console.log(this.filterHotelDetails);
    // } if (target === false) {
    //   this.filterHotelDetails.splice(this.filterHotelDetails.findIndex(
    //     data => {
    //       if (data.Amenities != null) {
    //         return data.Amenities.ID.includes(id);
    //       }
    //     }
    //   ));
    // }

    const amenities = <FormArray>this.filterFormGroup.get('amenities') as FormArray;

    if (event.checked) {
      amenities.push(new FormControl(id))
    } else {
      const i = amenities.controls.findIndex(x => x.value === id);
      amenities.removeAt(i);
    }
    // this.filterHotelData();
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



  // public filterHotelData() {
  //   let price = this.filterFormGroup.value.price;
  //   let amenities = this.filterFormGroup.value.amenities;
  //   let rating = this.filterFormGroup.value.rating;
  //   let location = this.filterFormGroup.value.location;
  //   let hotelDetails = this.HotelDetailsOriginal;
  //   let status: boolean = false;
  //   for (let i = 0; i < hotelDetails; i++) {

  //     if (hotelDetails[i].HotelID) {
  //       this.HotelDetailsOriginal.splice(i, 1);
  //       console.log(this.HotelDetailsOriginal);
  //       break;
  //     }

  //     if (hotelDetails[i].StartAmount <= price) {
  //       status = true;
  //     }
  //     if (status) {
  //       if (hotelDetails[i].amenities != null && hotelDetails[i].amenities != undefined && hotelDetails[i].amenities.length) {
  //         hotelDetails[i].amenities.forEach(element => {
  //           if (element.ID == hotelDetails[i].amenities.ID) {
  //             status = true;
  //           }
  //           else {
  //             status = false;
  //           }
  //         });
  //       } else {
  //         status = true;
  //       }
  //     }
  //     if (status) {
  //       console.log(status);
  //       console.log(hotelDetails);
  //     }
  //   }
  // }


  filterArray = [];
  filter() {

    let price = this.filterFormGroup.value.price;
    let amenities = this.filterFormGroup.value.amenities;
    let rating = this.filterFormGroup.value.rating;
    let location = this.filterFormGroup.value.location;

    var hotelObj;


    this.HotelDetailsOriginal.forEach(element => {
      hotelObj = element;
      let status: boolean = false;
      this.HotelDetailsOriginal.splice(hotelObj, 1);

      for (let p = 0; p < price.length; p++) {
        if ((price.length - 1) == p) {
          if (parseInt(hotelObj.StartAmount) <= price[price.length - 1]) {
            status = true;
          }
        }
      }
      if (status) {
        if (amenities.length > 0) {
          for (var amt = 0; amt < amenities.length; amt++) {
            if (hotelObj.Amenities.length > 0) {
              hotelObj.Amenities.forEach(element => {
                if (element.ID == amenities[amt]) {
                  status = true;
                } else {
                  status = false;
                }
              });
            } else {
              status = false;
            }
          }
        } else {
          status = false;
        }
      }

      // if (status) {
      //   if (hotelObj.Amenities == null && hotelObj.Amenities == undefined) {
      //     status = false;
      //   }
      //   else {
      //     amenities.forEach(data => {
      //       amenities.forEach(element => {
      //         if (hotelObj.ID === data.ID) {
      //           status = true;
      //         }
      //         else {
      //           status = false;
      //         }
      //       });
      //       console.log(data);
      //     });

      //   }
      // }
      // if (status) {
      //   if (rating.length) {
      //     rating.forEach(element => {
      //       if (element == hotelObj.Rating) {
      //         status = true;
      //       }
      //       else {
      //         status = false;
      //       }
      //     });
      //   }
      // }
      // if (status) {
      //   if (location.length) {
      //     rating.forEach(element => {
      //       if (element == hotelObj.Rating) {
      //         status = true;
      //       }
      //       else {
      //         status = false;
      //       }
      //     });
      //   }
      // }
      if (status) {
        this.filterArray.push(hotelObj);
      }

      console.log(this.HotelDetailsOriginal);
      console.log(this.filterArray);
    });
  }



}

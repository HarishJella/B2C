import { Component, ViewEncapsulation, OnInit, EventEmitter, Input, Output, HostListener, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HotelServiceService } from '../hotel-service/hotel-service.service';

import { Router } from '@angular/router';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';


// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'DDD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DDDD MMMM YYYY',
  },
};


@Component({
  selector: 'app-hotel-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss'],

})

export class HotelFormComponent implements OnInit {
  HotelCities: any;
  requestBody: any;
  myControl: FormControl;
  filteredOptions: Observable<any[]>;
  options = [];
  Adult: number = 1;
  Child: number = 0;
  minDate = new Date();

  date = new FormControl(moment().fromNow(true));

  // serializedDate = new FormControl((new Date()).toISOString());

  // serializedDate = new FormControl((new Date()).toISOString());

  constructor(private HotelData: HotelServiceService, private router: Router) {
    this.myControl = new FormControl();
  }

  filter(city: string): string[] {
    if (city) {
      return this.options.filter(option =>
        option.city.toLowerCase().indexOf(city.toLowerCase()) === 0);
    }
  }

  Travellers = [
    { value: 'Economy', viewValue: 'Economy' },
    { value: 'Business', viewValue: 'Business' },
    { value: 'Primary', viewValue: 'Primary' }
  ];

  ngOnInit() {
    this.showHotelCities();
    this.HotelData.currentRequestBodySource.subscribe(requestBody => this.requestBody = requestBody);

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => val.length >= 2 ? this.filter(val) : [])
      );
  }

  @Input('passengers_state') public passengers_state: string;
  // passing value from flightForm to homepage to toggle modal visibility
  @Output() public passengerFormEvent = new EventEmitter();

  public passengers_class() {
    this.passengers_state = this.passengers_state === 'd-block fadeInLeftBig' ? 'd-none fadeOutRightBig' : 'd-block fadeInLeftBig';
    // modal visiv=bility toggle
    this.passengerFormEvent.emit("passengerFormVisible");
  }


  //  passengers count
  // increment adult passengers
  adultInc() {
    this.Adult = this.Adult + 1;
  }
  //Decrement
  adultDec() {

    if (this.Adult === 1) {
      this.Adult = 1;
    } else {
      this.Adult = this.Adult - 1;
    }
  }
  childInc() {
    this.Child = this.Child + 1;
  }
  //Decrement
  childDec() {
    if (this.Child === 0) {
      this.Child = 0;
    } else {
      this.Child = this.Child - 1;
    }
  }


  showHotelCities() {
    this.HotelData.getHotelCities(
      data => {
        this.HotelCities = data.CITYNAMES.row;
        // console.log(data);
        // console.log(this.HotelCities);
        for (let Hotel of this.HotelCities) {
          // console.log(this.HotelCities[i].attributes.city);
          var city = {};
          city['city'] = Hotel.city;
          this.options.push(city);
          // console.log(this.options);
        }
      }
    )
  }

  // Hotel Search
  // Search input fields two way data binding
  city;
  checkInDate;
  checkOutDate;
  Htlrooms;
  requestRooms = [];

  hotelSearch() {
    console.log(this.city, this.checkInDate, this.checkOutDate);
    if (this.city != null && this.checkInDate != null && this.checkOutDate != null) {
      this.checkInDate = moment(this.checkInDate).format('DD-MM-YYYY');
      this.checkOutDate = moment(this.checkOutDate).format('DD-MM-YYYY');
      this.requestBody.Destination = this.city;
      this.requestBody.CheckIn = this.checkInDate;
      this.requestBody.CheckOut = this.checkOutDate;
      // for (var i = 0; i < this.Htlrooms; i++) {
      //   this.requestRooms.push({
      //     "AD": 2,
      //     "CH": 1,
      //     "CHAge": [
      //       8
      //     ]
      //   });
      // }
      // this.requestBody.Rooms = this.requestRooms;
      // this.requestBodyEvent.emit(this.requestBody);
      this.HotelData.getHotelDetails(this.requestBody);
      console.log(this.requestBody);
      console.log(this.city, this.checkInDate, this.checkOutDate, this.Htlrooms);
      // this.searchFirred.emit('firred');
      this.router.navigateByUrl('/hotel');
    } else {
      alert('All Fields are mandatory');
    }
  }
}

import { Component, ViewEncapsulation, OnInit, EventEmitter, Input, Output, HostListener, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HotelServiceService } from '../hotel-service/hotel-service.service';
import { Router } from '@angular/router';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


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
    dateInput: 'MM-DD-YYYY',
  },
  display: {
    dateInput: 'MM-DD-YYYY',
    monthYearLabel: 'MM-DD-YYYY',
    dateA11yLabel: 'MM-DD-YYYY',
    monthYearA11yLabel: 'MM-DD-YYYY',
  },
};


@Component({
  selector: 'app-hotel-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})

export class HotelFormComponent implements OnInit {
  HotelCities: any;
  requestBody: any;
  myControl: FormControl;
  filteredOptions: Observable<any[]>;
  options = [];

  date = new FormControl(moment("25-12-1995", "DD-MM-YYYY"));



  constructor(private HotelData: HotelServiceService, private router: Router) {
    this.myControl = new FormControl();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => val ? this.filter(val) : this.options.slice())
      );
  }

  filter(city: string) {
    return this.options.filter(option =>
      option.city.toLowerCase().indexOf(city.toLowerCase()) === 1);
  }

  Travellers = [
    { value: 'Economy', viewValue: 'Economy' },
    { value: 'Business', viewValue: 'Business' },
    { value: 'Primary', viewValue: 'Primary' }
  ];

  ngOnInit() {
    this.showHotelCities();
    this.HotelData.currentRequestBodySource.subscribe(requestBody => this.requestBody = requestBody);
  }

  @Input('passengers_state') public passengers_state: string;
  // passing value from flightForm to homepage to toggle modal visibility
  @Output() public passengerFormEvent = new EventEmitter();

  public passengers_class() {
    this.passengers_state = this.passengers_state === 'd-block fadeInLeftBig' ? 'd-none fadeOutRightBig' : 'd-block fadeInLeftBig';
    // modal visiv=bility toggle
    this.passengerFormEvent.emit("passengerFormVisible");
  }

  showHotelCities() {
    this.HotelData.getHotelCities(
      data => {
        this.HotelCities = data.CITYNAMES.row;
        // console.log(data);
        // console.log(this.HotelCities);
        for (var i = 0; i < this.HotelCities.length; i++) {
          // console.log(this.HotelCities[i].attributes.city);
          var city = {};
          city['city'] = this.HotelCities[i].city;
          this.options.push(city);
          // console.log(this.options);
        }
        console.log(this.options);
      }
    )

  }

  // Hotel Search
  // Search input fields two way data binding
  city: string = "";
  checkInDate: string = "";
  checkOutDate: string = "";

  hotelSearch() {
    alert('hi');
    if (this.city != '' && this.checkInDate != '' && this.checkOutDate != '') {
      this.requestBody.Destination = this.city;
      this.requestBody.CheckIn = this.checkInDate;
      this.requestBody.CheckOut = this.checkOutDate;
      // this.requestBodyEvent.emit(this.requestBody);
      this.HotelData.getHotelDetails(this.requestBody);
      console.log(this.city, this.checkInDate, this.checkOutDate);
      // this.searchFirred.emit('firred');
      this.router.navigateByUrl('/hotel');

    } else {
      alert('All Fields are mandatory');
    }

  }
}

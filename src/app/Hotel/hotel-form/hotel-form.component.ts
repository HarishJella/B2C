import { Component, ViewEncapsulation, OnInit, EventEmitter, Input, Output, HostListener, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HotelServiceService } from '../hotel-service/hotel-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit {
  HotelCities: any;
  requestBody: any;
  myControl: FormControl;
  filteredOptions: Observable<any[]>;
  options = [];

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
    if (this.city != '' && this.checkInDate != '' && this.checkOutDate != '') {
      this.requestBody.Destination = this.city;
      // this.requestBodyEvent.emit(this.requestBody);
      this.HotelData.getHotelDeatils(this.requestBody);
      console.log(this.city, this.checkInDate, this.checkOutDate);
      this.router.navigateByUrl('/hotel');
    } else {
      alert('All Fields are mandatory');
    }
  }

}

import { Component, ViewEncapsulation, OnInit, EventEmitter, Input, Output, HostListener, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FligthServiceService } from '../flight-service/fligth-service.service'


// import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-flight-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {

  @Input('passengers_state') public passengers_state;

  @Output() public passengerFormEvent = new EventEmitter();




  constructor(private eRef: ElementRef, public _flightService: FligthServiceService) {

  }


  // passing value from flightForm to homepage to toggle modal visibility
  public passengers_class() {
    this.passengers_state = this.passengers_state === 'd-block fadeInLeftBig' ? 'd-none fadeOutRightBig' : 'd-block fadeInLeftBig';
    // modal visiv=bility toggle
    this.passengerFormEvent.emit("passengerFormVisible");
  }


  closeDailog() {
    this.passengers_state = "d-none fadeOutRightBig";
  }


  myControl: FormControl = new FormControl();
  myControl1: FormControl = new FormControl();

  options = [];

  filteredOptions: Observable<string[]>;
  filteredOptions1: Observable<string[]>;

  ngOnInit() {
    this.LoadCities();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => val.length >= 2 ? this.filter(val) : [])
      );
    this.filteredOptions1 = this.myControl1.valueChanges
      .pipe(
        startWith(''),
        map(val => val.length >= 2 ? this.filter(val) : [])
      );
  }
  one: string[];
  two: string[];
  filter(val: string): string[] {
    return this.options.filter(option => {
      if (option.CityName.toLowerCase().indexOf(val.toLowerCase()) === 0) {
        return option.CityName.toLowerCase().indexOf(val.toLowerCase()) === 0;
      }
      if (option.CityCode.toLowerCase().indexOf(val.toLowerCase()) === 0) {
        return option.CityCode.toLowerCase().indexOf(val.toLowerCase()) === 0;
      }

    })

  }

  Travellers = [
    { value: 'Economy', viewValue: 'Economy' },
    { value: 'Business', viewValue: 'Business' },
    { value: 'Primary', viewValue: 'Primary' }
  ];
  FlightCities: any;

  // citynames=[];
  LoadCities() {

    this._flightService.GetCity(
      data => {
        this.FlightCities = data.root.row;

        for (let Cities of this.FlightCities) {
          var city = {};
          city['CityName'] = Cities.CityName;
          city['CityCode'] = Cities.CityCode;
          city['AirportName'] = Cities.AirportName;
          city['CountryName'] = Cities.CountryName;

          this.options.push(city);

        }
        console.log(this.options);

      }

    )
  }
  Adult: number = 1;
  Child: number = 0;
  Infant: number = 0;
  ClsName: string = "Economy";
  adultInc() {
    if ((this.Adult + this.Child + this.Infant) < 13) {
      this.Adult = this.Adult + 1;
    }
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
    if ((this.Adult + this.Child + this.Infant) < 13) {
      this.Child = this.Child + 1;
    }
  }
  //Decrement
  childDec() {
    if (this.Child === 0) {
      this.Child = 0;
    } else {
      this.Child = this.Child - 1;
    }
  }
  increment() {
    if ((this.Adult + this.Child + this.Infant) < 13) {

    }
  }

  InfantInc() {
    if ((this.Adult + this.Child + this.Infant) < 13) {
      if (this.Infant < 4) {
        this.Infant = this.Infant + 1;
      }
    }
  }
  //Decrement
  InfantDec() {
    if (this.Infant === 0) {
      this.Infant = 0;
    } else {
      this.Infant = this.Infant - 1;
    }
  }


}



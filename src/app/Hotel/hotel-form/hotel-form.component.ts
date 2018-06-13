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
  constructor(private HotelData: HotelServiceService, private router: Router) { }

  myControl: FormControl = new FormControl();

  options = [];

  Travellers = [
    { value: 'Economy', viewValue: 'Economy' },
    { value: 'Business', viewValue: 'Business' },
    { value: 'Primary', viewValue: 'Primary' }
  ];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.showHotelCities();

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
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
        this.HotelCities = data.root.row;
        // console.log(data);
        // console.log(this.HotelCities);
        for (var i = 0; i < this.HotelCities.length; i++) {
          // console.log(this.HotelCities[i].attributes.city);
          var city = this.HotelCities[i].attributes.city;
          this.options.push(city);
          // console.log(this.options);
        }
        console.log(this.options);
      }
    )
  }

  hotelSearch() {
    if (this.options != null) {
      alert(this.options);
      this.router.navigateByUrl('/hotel');
    }

  }

}

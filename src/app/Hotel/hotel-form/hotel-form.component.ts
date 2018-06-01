import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit {

  constructor() { }

  myControl: FormControl = new FormControl();

  options = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  Travellers = [
    { value: 'Economy', viewValue: 'Economy' },
    { value: 'Business', viewValue: 'Business' },
    { value: 'Primary', viewValue: 'Primary' }
  ];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
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

  passengers_state: string = '2';


  passengers_class() {
    this.passengers_state = this.passengers_state === 'd-block fadeInLeftBig' ? 'd-none fadeOutRightBig' : 'd-block fadeInLeftBig';

  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl,  FormGroup } from '@angular/forms'
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-globalcomponents',
  templateUrl: './globalcomponents.component.html',
  styleUrls: ['./globalcomponents.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalcomponentsComponent implements OnInit {



  constructor() {
  
     
  }

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
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

}

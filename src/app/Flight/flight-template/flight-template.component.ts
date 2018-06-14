import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-flight-template',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './flight-template.component.html',
  styleUrls: ['./flight-template.component.scss']
})
export class FlightTemplateComponent implements OnInit {

  col0: string = 'col-md-0';
  col2: string = 'col-md-2';
  @Input() Flight;

  more_flights_show: string = 'slideOutUp d-none';

  more_flights() {
    this.more_flights_show = this.more_flights_show === 'slideOutUp d-none' ? 'slideInDown d-flex' : 'slideOutUp d-none';
  }


  constructor() { }

  ngOnInit() {
    this.col0 = 'col-md-0';
    this.col2 = 'col-md-2';
  }
}

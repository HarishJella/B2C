import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-flight-template',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './flight-template.component.html',
  styleUrls: ['./flight-template.component.scss']
})
export class FlightTemplateComponent implements OnInit {

  more_flights_show: string = 'slideOutUp d-none';

  more_flights() {
    this.more_flights_show = this.more_flights_show === 'slideOutUp d-none' ? 'slideInDown d-flex' : 'slideOutUp d-none';
  }

  constructor() { }

  ngOnInit() {
  }


}

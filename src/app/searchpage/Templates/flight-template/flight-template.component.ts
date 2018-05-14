import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'app-flight-template',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './flight-template.component.html',
  styleUrls: ['./flight-template.component.scss']
})
export class FlightTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

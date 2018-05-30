import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hotel-template',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hotel-template.component.html',
  styleUrls: ['./hotel-template.component.scss']
})
export class HotelTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}

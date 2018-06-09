import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bus-template',
  templateUrl: './bus-template.component.html',
  styleUrls: ['./bus-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BusTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  seat: string = 'assets/images/bus seat icons/avail.svg';
  select_seat(event) {
    this.seat = this.seat === 'assets/images/bus seat icons/avail.svg' ? 'assets/images/bus seat icons/select.svg' : 'assets/images/bus seat icons/avail.svg';
    console.log(event);
  }


  bord_tab: string = '';
  droppingTab_active: string = '';
  can_tab: string = '';


  bus_inf() {
    this.droppingTab_active = "mat-tab-label-active";
  }
  
}

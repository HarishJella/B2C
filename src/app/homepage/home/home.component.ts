import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';



@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  col0: string = 'col-md-0.1';
  col2: string = 'col-md-1.9';
  constructor() {

  }
  ngOnInit() {
    this.col0 = 'col-md-0.1';
    this.col0 = 'col-md-0.1';
    this.col2 = 'col-md-1.9';
   
  }

  public modalToggleVisiblity;
  public passengers_state: string = "d-none fadeOutRightBig";
   tdsflight="";
 
    public tab() {
    
    alert("Home");
    this.modalToggleVisiblity = "passengerFormHidden";
    this.passengers_state = "d-none fadeOutRightBig";
  }
  public tdsFt()
  {
  
   this.tdsflight=" <mat-tab> <ng-template mat-tab-label> <img src='assets/images/flight.svg' >    <!-- <p>flight</p> -->  </ng-template>  <app-flight-form (passengerFormEvent)='modalToggleVisiblity=$event' [passengers_state]='passengers_state'></app-flight-form></mat-tab> ";
    alert(this.tdsflight);
    return this.tdsflight;
  }
}

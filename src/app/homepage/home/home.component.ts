import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../../shared/shared.service';



@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  col0: string = 'col-md-0.1';
  col2: string = 'col-md-1.9';
  tabIndex: number;
  constructor(private _sharedService: SharedService) { }


  ngOnInit() {
    this.col0 = 'col-md-0.1';
    this.col0 = 'col-md-0.1';
    this.col2 = 'col-md-1.9';
    this._sharedService.tabCurrentIndexSource.subscribe(data => this.tabIndex = data);
  }

  public modalToggleVisiblity;
  public passengers_state: string = "d-none fadeOutRightBig";
  tdsflight = "";

  public tab(tabIndex: number) {
    this.modalToggleVisiblity = "passengerFormHidden";
    this.passengers_state = "d-none fadeOutRightBig";
    this.tabIndex = tabIndex;
    this._sharedService.tabGroup(this.tabIndex);
  }




}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  tabIndex: number = 0;
  // Observable string sources
  private tabSource = new BehaviorSubject<any>(this.tabIndex);
  // output a reference string to trigger parent showHotelDetails(), onclick of search button

  tabCurrentIndexSource = this.tabSource.asObservable();

  // Service message commands
  tabGroup(tabIndex: number) {
    this.tabSource.next(tabIndex);
  }

}

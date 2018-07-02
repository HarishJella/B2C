import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public snackBar: MatSnackBar) { }


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

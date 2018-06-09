import { Injectable } from '@angular/core';
import { modifySearchComponent } from './dailog.components';
import { MatDialogRef } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(public dialogRef: MatDialogRef<modifySearchComponent>) {

  }

  public closeDailog() {
    this.dialogRef.close();
    console.log("success");
  }
}

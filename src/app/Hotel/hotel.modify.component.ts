import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AnimationQueryMetadata } from '@angular/animations';
import { AfterViewInit, ViewChild } from '@angular/core';
import { HotelFormComponent } from './hotel-form/hotel-form.component';


@Component({
    selector: 'hotel-modify-search',
    templateUrl: 'hotel.modify.component.html',
    styles: [`
    .mat-dialog-container{
        overflow:visible;
    }
    `]

})
export class hotelModifySearch {
    @ViewChild(HotelFormComponent)
    private _hotelFormComp: HotelFormComponent;
    city;
    checkInDate;
    checkOutDate;
    constructor(private dialogRef: MatDialogRef<hotelModifySearch>) {
        // dialogRef.disableClose = true;

    }

    closeDailog() {

        // alert(this._hotelFormComp.city);
        // this.dialogRef.close();

    }
    ngOnInit() {

    }



}
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AnimationQueryMetadata } from '@angular/animations';
import { AfterViewInit, ViewChild } from '@angular/core';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { HotelServiceService } from './hotel-service/hotel-service.service';


@Component({
    selector: 'hotel-modify-search',
    template: `
    <div>
        <button (click)="closeDailog()">X</button>
        <app-hotel-form [city]="city"></app-hotel-form>
    </div>
    
    `,
    styles: [`
    .app-hotel-form{
        overflow:visible;
    }
    .mat-dialog-container{
        overflow:visible !important;
    }
    `]
})

export class hotelModifySearch {
    requestBody;
    constructor(private dialogRef: MatDialogRef<hotelModifySearch>, private _hotelService: HotelServiceService) {
        // dialogRef.disableClose = true;
    }

    closeDailog() {
        this.dialogRef.close();
    }

    ngOnInit() {
        this._hotelService.currentRequestBodySource.subscribe(requestBody => this.requestBody = requestBody);
    }

}
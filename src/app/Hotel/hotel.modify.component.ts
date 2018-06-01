import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AnimationQueryMetadata } from '@angular/animations';

@Component({
    selector: 'hotel-modify-search',
    templateUrl: 'hotel.modify.component.html',
})
export class hotelModifySearch {
    constructor(private dialogRef: MatDialogRef<hotelModifySearch>) {
        // dialogRef.disableClose = true;
    }
    closeDailog() {
        // this.dialogRef.close();
        console.log();
    }
}
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AnimationQueryMetadata } from '@angular/animations';

@Component({
    selector: 'bus-modify-search',
    templateUrl: 'bus.modify.component.html',
})
export class busModifySearch {
    constructor(private dialogRef: MatDialogRef<busModifySearch>) {
        // dialogRef.disableClose = true;
    }

}
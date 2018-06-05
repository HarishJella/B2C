
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AnimationQueryMetadata } from '@angular/animations';

@Component({
    selector: 'modify-search',
    templateUrl: 'dailog.component.html',
})
export class modifySearchComponent {
    constructor(public dialogRef: MatDialogRef<modifySearchComponent>) {
        dialogRef.disableClose = true;
    }
    public closeDailog() {
        this.dialogRef.close();
        console.log("success");
    }
}
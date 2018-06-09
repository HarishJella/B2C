
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AnimationQueryMetadata } from '@angular/animations';

@Component({
    selector: 'modify-search',
    templateUrl: 'dailog.component.html',
})
export class modifySearchComponent {
    @Output() public stickyTopEvent = new EventEmitter();
    constructor(public dialogRef: MatDialogRef<modifySearchComponent>) {
        dialogRef.disableClose = true;
        // dialogRef.afterClosed().subscribe(result => {
        //     this.stickyTopEvent.emit('sticky-top');
        // });



    }


}
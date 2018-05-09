import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatGridListModule,MatIconModule,MatTabsModule,MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatGridListModule,MatIconModule,MatTabsModule,MatCardModule],
})

export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatIconModule, MatTabsModule, MatCardModule, MatSidenavModule,MatFormFieldModule,MatInputModule,MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatIconModule, MatTabsModule, MatCardModule, MatSidenavModule,MatFormFieldModule,MatInputModule,MatSelectModule],

})

export class ComponentsModule { }

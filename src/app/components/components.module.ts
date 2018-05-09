import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule],
})

export class ComponentsModule { }

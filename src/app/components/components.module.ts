import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';






@NgModule({

  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatIconModule, MatTabsModule, MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatExpansionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatSliderModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatIconModule, MatTabsModule, MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatExpansionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatSliderModule],

})

export class ComponentsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './homepage/home/home.component';
import { SearchComponent } from './searchpage/search/search.component';
import { BookingComponent } from './bookingpage/booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

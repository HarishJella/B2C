import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './homepage/home/home.component';
import { SearchComponent } from './searchpage/search/search.component';
import { BookingComponent } from './bookingpage/booking/booking.component';
import { AboutComponent } from './aboutpage/about/about.component';
import { FaqComponent } from './FAQpage/faq/faq.component';
import { GlobalcomponentsComponent } from './globalcomponents/globalcomponents.component';
import { FlightTemplateComponent } from './searchpage/Templates/flight-template/flight-template.component';
import { BusTemplateComponent } from './searchpage/Templates/bus-template/bus-template.component';
import { HotelTemplateComponent } from './searchpage/Templates/hotel-template/hotel-template.component';
import { FlightComponent } from './searchpage/search/flight/flight.component';
import { BusComponent } from './searchpage/search/bus/bus.component';
import { HotelComponent } from './searchpage/search/hotel/hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    BookingComponent,
    AboutComponent,
    FaqComponent,
    GlobalcomponentsComponent,
    FlightTemplateComponent,
    BusTemplateComponent,
    HotelTemplateComponent,
    FlightComponent,
    BusComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule
  
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

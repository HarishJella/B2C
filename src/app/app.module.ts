import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './homepage/home/home.component';
import { BookingComponent } from './bookingpage/booking/booking.component';
import { AboutComponent } from './Staticpages/about/about.component';
import { FaqComponent } from './Staticpages/faq/faq.component';
import { GlobalcomponentsComponent } from './globalcomponents/globalcomponents.component';
import { FlightTemplateComponent } from './Flight/flight-template/flight-template.component';
import { BusTemplateComponent } from './Bus/bus-template/bus-template.component';
import { HotelTemplateComponent } from './Hotel/hotel-template/hotel-template.component';
import { FlightComponent } from './Flight/flight-result/flight.component';
import { BusComponent } from './Bus/bus-page/bus.component';
import { HotelComponent } from './Hotel/hotel-page/hotel.component';
import { FlightbookingComponent } from './Flight/flight-booking/flightbooking.component';
import { BusbookingComponent } from './Bus/bus-booking/busbooking.component';
import { FlightFormComponent } from './Flight/flight-form/flight-form.component';
import { HotelBookingComponent } from './Hotel/hotel-booking/hotel-booking.component';
import { modifySearchComponent } from './Flight/dailog.components';
import { PrivacyPolicyComponent } from './Staticpages/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookingComponent,
    AboutComponent,
    FaqComponent,
    GlobalcomponentsComponent,
    FlightTemplateComponent,
    BusTemplateComponent,
    HotelTemplateComponent,
    FlightComponent,
    BusComponent,
    HotelComponent,
    FlightbookingComponent,
    BusbookingComponent,
    FlightFormComponent,
    HotelBookingComponent,
    modifySearchComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule

  ],
  entryComponents: [
    modifySearchComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { BusComponent } from './Bus/bus-page/bus.component';
import { HotelComponent } from './Hotel/hotel-page/hotel.component';
import { FlightComponent } from './Flight/flight-result/flight.component';
import { BookingComponent } from './bookingpage/booking/booking.component';
import { FlightbookingComponent } from './Flight/flight-booking/flightbooking.component';
import { AboutComponent } from './aboutpage/about/about.component';
import { GlobalcomponentsComponent } from './globalcomponents/globalcomponents.component';
import { BusbookingComponent } from './Bus/bus-booking/busbooking.component';
import { HotelBookingComponent } from './Hotel/hotel-booking/hotel-booking.component';
import { FaqComponent } from './Staticpages/faq/faq.component';
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'flight_booking', component: FlightbookingComponent },
  { path: 'bus', component: BusComponent },
  { path: 'bus_booking', component: BusbookingComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'hotel_booking', component: HotelBookingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'globaltemplate', component: GlobalcomponentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

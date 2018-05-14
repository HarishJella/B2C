import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { SearchComponent } from './searchpage/search/search.component';
import { BusComponent } from './searchpage/search/bus/bus.component';
import { HotelComponent } from './searchpage/search/hotel/hotel.component';
import { FlightComponent } from './searchpage/search/flight/flight.component';
import { BookingComponent } from './bookingpage/booking/booking.component';
import { AboutComponent } from './aboutpage/about/about.component';
import {FaqComponent} from './FAQpage/faq/faq.component';
import{GlobalcomponentsComponent} from './globalcomponents/globalcomponents.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'bus', component: BusComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq',component:FaqComponent },
  { path:'globalcomponents',component:GlobalcomponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

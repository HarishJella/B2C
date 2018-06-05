import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor(private http: HttpClient) {

  }
  HotelUrl = 'assets/api.json';
  // HotelUrl = 'https://jsonplaceholder.typicode.com/users';
  getHotelDeatils() {
    return this.http.get(this.HotelUrl);
  }

}

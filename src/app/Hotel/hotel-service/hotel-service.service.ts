import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import { hotelInterface } from '../hotel.interface';

export interface hotelInterface {
  HotelID: string;
  TraceID: string;
  HotelChain: string;
  HotelKey: string;
  GHotelId: string;
  HotelName: string;
  NoOfRooms: string;
  FullAddress: string;
  Lat: string;
  Lng: string;
  ImgUrl: string;
  HotelPhone: string;
  Rating: string;
  MapLink: string;
  Description: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'basic QWRtaW46QWRtaW4=',
    'Accept-Language': 'en-US'
    // 'Access-Control-Allow-Origin': 'http://localhost:4200/',
    // 'Access-Control-Allow-Methods ': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    // 'Access-Control-Allow-Headers ': 'X-Requested-With,content-type',
    // 'Access-Control-Allow-Credentials': 'true'
  })
};

const body = {
  "AgentDetails": {
    "ApiKey": "WE01ABXzy08USER",
    "ApiSecret": "8j8Qh6Y6%2f3cbT%2bmIOazO1A%3d%3d",
    "AgentType": "INTERNAL",
    "AppType": "B2B",
    "BranchID": "B0001",
    "AgentId": "WCKUL0200101",
    "SequenceId": "11059",
    "TerminalId": "WCKUL020010108",
    "UserName": "anbu@webaxyz.com",
    "IPAddress": "192.168.31.63",
    "LoginReference": "NecA3T4vCZqbjZifUFQlwjh4%2fZswJLghjZYRLkiyoOQ%3d",
    "TerminalType": "W",
    "CurrencyCode": "MYR"
  },
  "Vendor": "SPECIALTOURS",
  "Destination": "Dubai, United Arab Emirates",
  "CheckIn": "18-07-2018",
  "CheckOut": "21-07-2018",
  "Rooms": [
    {
      "AD": 2,
      "CH": 1,
      "CHAge": [
        8
      ]
    }
  ],
  "SearchID": 0,
  "countryCode": "IN",
  "ClientCountryId": "27"
};


@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor(private http: HttpClient) {

  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // HotelUrl = 'assets/api.json';
  HotelUrl = 'http://localhost:13161/api/HotelSearch';
  getHotelDeatils(): Observable<any> {
    return this.http.post<any>(this.HotelUrl, body, httpOptions);
  }

}

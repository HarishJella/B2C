import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// import 'rxjs/add/operator/map';
// import { hotelInterface } from '../hotel.interface';

// Generated by https://quicktype.io

export interface Hotel {
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
  HotelImages: null;
  Amenities: Amenity[];
  Room: Room[];
  Location: string;
  Currency: string;
  Checkin: string;
  CheckOut: string;
  Status: string;
  Category: string;
  StartAmount: string;
  Supplier: string;
  Supplier_Id: string;
  MarkUpAmt: null;
  CommissionAmt: null;
  TotalGrossAmount: null;
}

export interface Amenity {
  ID: string;
  Name: string;
}

export interface Room {
  TraceID: null;
  Supplier: string;
  Supplier_Id: string;
  HotelID: string;
  RoomId: string;
  RoomName: string;
  Roomtypecode: string;
  RoomPaxCapacity: string;
  AllocationDetails: string;
  BaseAmount: string;
  MarkUp: string;
  Commission: string;
  TotalGrossAmount: string;
  Currency: string;
  CancellationPolicy: string;
  SpecialRequest: string;
  SpecialOffer: string;
  TariffNotes: string;
  RateBasic: string;
  SuppBaseAmount: string;
  TotalAmount: string;
  TaxAmount: string;
  Inclusion: string;
  Status: string;
  HBCancellationPolicy: HBCancellationPolicy;
  RoomCount: string;
  AdultCount: string;
  ChildCount: string;
  CancellationDeadLine: string;
}

export interface HBCancellationPolicy {
  FromDate: string;
  ToDate: string;
  ChargeAmount: string;
}


@Injectable({
  providedIn: 'root'
})


export class HotelServiceService {

  private requestBody = {
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
    "Vendor": "HOTELBED",
    "Destination": "London, United Kingdom",
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
  // Observable string sources
  private requestBodySource = new BehaviorSubject<any>(this.requestBody);
  // output a reference string to trigger parent showHotelDetails(), onclick of search button

  currentRequestBodySource = this.requestBodySource.asObservable();
  // Observable string streams
  // currentRequestBodySource = this.requestBodySource.asObservable();

  constructor(private http: HttpClient) { }

  // Post Request -> header
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  // Service message commands
  HotelUrl: string = 'http://192.168.31.199:1996/api/HotelSearch';
  // HotelUrl: string = 'http://localhost:13161/api/HotelSearch';
  // HotelUrl: string = 'assets/api.json';


  getHotelDetails(requestBody: any): any {
    this.requestBodySource.next(requestBody);
    return this.http.post(this.HotelUrl, this.requestBody, this.httpOptions);
  }

  CityUrl: string = 'assets/Hotel_City.json';
  getHotelCities(callback) {
    return this.http.get(this.CityUrl).subscribe(data => {
      callback(data);
    },
      err => {
        console.log(err);
      });
  }

}

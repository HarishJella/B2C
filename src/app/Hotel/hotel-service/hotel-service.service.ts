import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
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

@Injectable({
  providedIn: 'root'
})


export class HotelServiceService {




  // Post Request -> header
  private httpOptions = {
    headers: new HttpHeaders({

      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST'
      //'Authorization': 'basic QWRtaW46QWRtaW4=',
      //'Accept-Language': 'en-US',
      //'Access-Control-Allow-Origin': '*' //t
    })
  };

  // Post Request -> body 
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
    "Destination": "Athens, Greece",
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

  constructor(private http: HttpClient) { }



  HotelUrl: string = 'http://localhost:13161/api/HotelSearch';
  getHotelDeatils(callback) {
    //return this.http.post('http://localhost:13161/api/HotelSearch', this.requestBody,);
    return this.http.post(this.HotelUrl, this.requestBody).subscribe(data => {
      callback(data);
    },
      err => {
        console.log(err);
      });
  }


}

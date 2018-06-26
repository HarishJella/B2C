import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FligthServiceService {

  constructor(private http: HttpClient) { }


  //post request
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  //post requestbody ->body 
  private requestBody = {
    "AgentDetailS": {
      "ApiKey": "WE01ABXzy08USER",
      "ApiSecret": "8j8Qh6Y6%2f3cbT%2bmIOazO1A%3d%3d",
      "AgentType": "WEB",
      "AppType": "B2B",
      "BranchID": "B0001",
      "AgentID": "WCKUL0200101",
      "TerminalID": "WCKUL020010108",
      "UserName": "anbu@webaxyz.com",
      "SequenceID": "11302",
      "IPAddress": "192.168.31.63",
      "LoginReference": "NecA3T4vCZqbjZifUFQlwuNCLzmI/9ZaCTMCb7q5NVs=",
      "TerminalType": "W",
      "CurrencyCode": "MYR"
    },

    "Sectors": [
      {
        "Source": "MAA",
        "Destination": "BLR",
        "DepartureDate": "2018-06-14",
        "ReturnDate": null


      }
    ],

    "ServiceRequestType": "INTERNAL",
    "Class": "Economy",
    "PrefAir": "ALL",
    "AirlineCategory": "All",
    "TripType": "O",
    "AirportType": "D",
    "PaxCounT": {
      "AdultCount": 1,
      "Childcount": 0,
      "InfantCount": 0

    }


  }

  FlightUrl: string = 'http://192.168.31.199:1998/WxyzAirService.svc/GetAirAvailability';
  getflightdetails(callback) {
    return this.http.post(this.FlightUrl, this.requestBody, this.httpOptions).subscribe(data => {
      callback(data);
    },
      err => {
        console.log(err);
      });
  }
  CityURL: string = 'assets/Flight_city.Json'
  GetCity(callback) {
    this.http.get(this.CityURL).subscribe(data => {
      callback(data);
    }, err => {
      console.log(err);
    });
  }
}

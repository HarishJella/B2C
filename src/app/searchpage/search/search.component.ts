import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  events: string[] = [];
  opened: boolean = false;
  item:boolean;



  constructor() { 
   
  }

  ngOnInit() {
  }


  open_filter(item) {
   

  }
}

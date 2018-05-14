import { Component, OnInit ,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-globalcomponents',
  templateUrl: './globalcomponents.component.html',
  styleUrls: ['./globalcomponents.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalcomponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

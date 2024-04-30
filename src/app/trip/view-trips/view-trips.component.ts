import { Component } from '@angular/core';

@Component({
  selector: 'app-view-trips',
  templateUrl: './view-trips.component.html',
  styleUrls: ['./view-trips.component.scss']
})
export class ViewTripsComponent {
  currDt : Date = new Date();
  ccy : number = 150;
  num : number = 10;
  str : string = "Hello Pipe";
}

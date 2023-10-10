import { Component } from '@angular/core';
import { EasepickComponent } from '../easepick/easepick.component';
import { DateTime } from '@easepick/bundle';
@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})


export class ReservationTableComponent {
  end: string = "";
  start: string = "";
  diff: number = 0;
  price: number = 0;

  constructor() {

  }
  checkRadio1(room_price) {
    this.price = room_price * this.diff;
  }
  checkRadio2(room_price) {

    this.price = room_price * this.diff;
  }
  checkRadio3(room_price) {

    this.price = room_price * this.diff;
  }

  handle_format() {


    //this.start=start.format('DD MMMM').toString();
    //this.end=end.format('DD MMMM YYYY').toString();
    //this.diff=end.diff(start,"day");
    //this.checkRadio1(50);
  }

  public setEnd(date: string) {
    this.end = date;
  }
}

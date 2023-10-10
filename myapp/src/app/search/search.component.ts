import { Component } from '@angular/core';

import { easepick } from '@easepick/bundle';
import { DateTime } from '@easepick/datetime';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public startDate: string = "";
  public endDate: string = "";

  public startDateFromChild($event: any): void {
    this.startDate = $event;
  }
  public endDateFromChild($event: any): void {
    this.endDate = $event;
  }
}

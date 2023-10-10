import { AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { easepick } from '@easepick/bundle';
import { DateTime } from '@easepick/datetime';

@Component({
  selector: 'app-easepick',
  templateUrl: './easepick.component.html',
  styleUrls: ['./easepick.component.css']
})
export class EasepickComponent implements OnInit, AfterViewInit {
  @ViewChild('easepick') easepick: any;
  public picker;

  @Output() startDate = new EventEmitter<string>();
  @Output() endDate = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }



  ngAfterViewInit() {
    this.picker = new easepick.create({
      element: document.getElementById('datepicker'),
      css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css',
      ],
      plugins: ['RangePlugin', 'LockPlugin'],
      grid: 2,
      calendars: 2,
      inline: false,
      lang: "de-DE",
      LockPlugin: {
        minDate: new Date(),
        minDays: 3
      },
      RangePlugin: {
        tooltipNumber(num) {
          return num - 1;
        },
        locale: {
          one: 'night',
          other: 'nights',
        },
      },

    });

    this.picker.on('select', (e) => {
      const { view, date, target } = e.detail;
      // do something
      let start: DateTime = new DateTime(e.detail.start);
      let end: DateTime = new DateTime(e.detail.end);
      this.startDate.emit(start.format("DD MMM").toString());
      this.endDate.emit(end.format("DD MMM YYYY").toString());

    });
  }

}
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { formatDate  } from '@angular/common';
import { Forecast } from 'src/app/models/forecast.model';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DailyForecastComponent implements OnInit {

  @Input() city: string;
  @Input() forecast: Forecast[];

  constructor() {}

  ngOnInit() {}

  getWeekDay(date) {
    return formatDate(date, 'EEEE', 'en-US').toLowerCase();
  }

}

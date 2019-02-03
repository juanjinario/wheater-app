import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-extra-info',
  templateUrl: './weather-extra-info.component.html',
  styleUrls: ['./weather-extra-info.component.scss']
})
export class WeatherExtraInfoComponent implements OnInit {

  @Input() humidity;
  @Input() wind;
  @Input() visibility;

  constructor() { }

  ngOnInit() {
  }

}

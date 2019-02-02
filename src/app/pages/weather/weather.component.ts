import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Weather } from '../../models/weather.model';
import { WeatherService } from '../../services/service.index';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  city = 'Santiago,CL';
  temperature = 'metric';
  weather: Weather;

  constructor(
    private toastr: ToastrService,
    private weatherService: WeatherService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.getCurrentWeather();
  }

  public onCityChange(_city: string) {
    this.city = _city;
    this.loadData();
  }

  public onUnitsChange() {
    this.loadData();
  }

  getCurrentWeather() {
    this.weatherService.getWeather(this.city, this.temperature).subscribe(
      (data) => {
        this.weather = data;
      }
    );
  }

}

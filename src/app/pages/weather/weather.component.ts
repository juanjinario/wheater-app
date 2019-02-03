import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Weather } from '../../models/weather.model';
import { WeatherService } from '../../services/service.index';
import { Forecast } from 'src/app/models/forecast.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  city = 'Santiago,CL';
  temperature = 'metric';
  weather: Weather;
  dailyForecast: Forecast[] = [];
  dayForecast: Forecast[] = [];
  dayForcastJSON = [];

  constructor(
    private toastr: ToastrService,
    private weatherService: WeatherService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.getCurrentWeather();
    this.getForecasts();
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

  getForecasts() {
    this.dailyForecast = [];
    this.dayForecast = [];
    this.weatherService.getForecast(this.city, this.temperature).subscribe(
      (data) => {
        // Get daily forecast
        for (let i = 0; i < data.length; i = i + 8 ) {
          this.dailyForecast.push(data[i]);
        }

        // Get day forecast
        this.dayForecast = data.slice(0, 8);
        this.generateDayJSON(this.dayForecast);
      }
    );
  }

  generateDayJSON(_dayForecast) {
    this.dayForcastJSON = [];
    for (let forecast of _dayForecast) {
      this.dayForcastJSON.push({
        'label': formatDate(forecast.date, 'HH:mm', 'en-US'),
        'value': forecast.temp
      });
    }
  }

}

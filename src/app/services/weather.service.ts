import { Injectable } from '@angular/core';
import { ConstUrl } from './const-url';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Weather } from '../models/weather.model';
import { Forecast } from '../models/forecast.model';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(
    public http: HttpClient
  ) { }

  getWeather(city: string, units: string): Weather | any {
    return this.http.get(`${ConstUrl.BASE_URL}${ConstUrl.WEATHER}?q=${city}&${ConstUrl.APPID}=${ConstUrl.KEY}&${ConstUrl.UNITS}=${units}`)
    .pipe(
      map((res: any) => {
        return new Weather(res.name, res.main.temp, res.weather[0].description,
          res.main.temp_min, res.main.temp_max, res.weather[0].icon);
      }),
      catchError(err => of([]))
    );
  }

  getForecast( city: string, units: string ): Forecast[] | any {
    let forecast: Forecast[] = [];
    forecast.splice(0, forecast.length);
    return this.http.get(`${ConstUrl.BASE_URL}${ConstUrl.FORECAST}?q=${city}&${ConstUrl.APPID}=${ConstUrl.KEY}&${ConstUrl.UNITS}=${units}`)
    .pipe(
      map((res: any) => {
        for (let i = 0; i < res.list.length; i = i + 1 ) {
          const forecastWeather = new Forecast(res.city.name,
                                               res.list[i].weather[0].description,
                                               res.list[i].main.temp,
                                               res.list[i].dt_txt,
                                               res.list[i].weather[0].icon);
          forecast.push(forecastWeather);
        }
        return forecast;
      }),
      catchError(err => of([]))
    );
  }
}

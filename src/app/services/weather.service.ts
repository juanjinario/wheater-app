import { Injectable } from '@angular/core';
import { ConstUrl } from './const-url';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Weather } from '../models/weather.model';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(
    public http: HttpClient
  ) { }

  getWeather(city: string, units: string): Weather | any {
    return this.http.get(`${ConstUrl.BASE_URL}${ConstUrl.WEATHER}?q=${city}&${ConstUrl.APPID}=${ConstUrl.KEY}&${ConstUrl.UNITS}=${units}`).pipe(
      map((res: any) => {
        return new Weather(res.name, res.main.temp, res.weather[0].description,
          res.main.temp_min, res.main.temp_max, res.weather[0].icon);
      }),
      catchError(err => of([]))
    );
  }
}

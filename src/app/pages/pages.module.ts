import { NgModule } from '@angular/core';
import { ChartsModule } from './charts/charts.module';
import { SharedModule } from '../shared/shared.module';
// Routes
import { AppPagesRoutingModule } from './pages.routing';
// Components
import { PagesComponent } from './pages.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    WeatherComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    ChartsModule,
    AppPagesRoutingModule
  ],
  exports: [
    WeatherComponent,
    PagesComponent,
    SharedModule
  ]
})
export class PagesModule { }

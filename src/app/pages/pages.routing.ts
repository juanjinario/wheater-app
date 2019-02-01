import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../auth/guards/auth.guard';


const pagesRoutes: Routes = [
  { path: '', component: PagesComponent, canActivate: [AuthGuard], children: [
      { path: 'weather', component: WeatherComponent },
      { path: 'about-us', component: WeatherComponent },
      { path: '', redirectTo: '/weather', pathMatch: 'full' },
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
  })
export class AppPagesRoutingModule { }

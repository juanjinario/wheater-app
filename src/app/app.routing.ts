import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './404/nopagefound.component';
import { LoginComponent } from './auth/login/login.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'login',  component: LoginComponent },
    ],
  },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

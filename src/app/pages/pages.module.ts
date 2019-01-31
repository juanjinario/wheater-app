import { NgModule } from '@angular/core';
import { ChartsModule } from './charts/charts.module';
import { SharedModule } from '../shared/shared.module';
// Routes
import { AppPagesRoutingModule } from './pages.routing';
// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    ChartsModule,
    AppPagesRoutingModule
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    SharedModule
  ]
})
export class PagesModule { }

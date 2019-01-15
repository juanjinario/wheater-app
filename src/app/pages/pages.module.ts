import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ChartsModule } from './charts/charts.module';

import { AppPagesRoutingModule } from './pages.routing';
// Modules
import { SharedModule } from '../shared/shared.module';

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
    PagesComponent
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ChartsModule } from './charts/charts.module';

import { AppPagesRoutingModule } from './pages.routing';
// Modules
import { MaterialModule } from './component/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    ChartsModule,
    AppPagesRoutingModule
  ],
  exports: [
    DashboardComponent,
    PagesComponent
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ChartsModule } from './charts/charts.module';

// Modules
import { MaterialModule } from './component/material.module';
import { FusionchartsModule } from './component/fusioncharts.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    MaterialModule,
    FusionchartsModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent,
    PagesComponent
  ]
})
export class PagesModule { }

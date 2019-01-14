import { NgModule } from '@angular/core';
import { StepLineComponent } from './step-line/step-line.component';
import { BarsComponent } from './bars/bars.component';
import { PieComponent } from './pie/pie.component';
import { NestedPieComponent } from './nested-pie/nested-pie.component';
import { SplineAreaComponent } from './spline-area/spline-area.component';

import { FusionchartsModule } from '../component/fusioncharts.module';


@NgModule({
  declarations: [
    StepLineComponent,
    BarsComponent,
    PieComponent,
    NestedPieComponent,
    SplineAreaComponent,
  ],
  imports: [
    FusionchartsModule
  ],
  exports: [
    StepLineComponent,
    BarsComponent,
    PieComponent,
    NestedPieComponent,
    SplineAreaComponent
  ]
})
export class ChartsModule { }

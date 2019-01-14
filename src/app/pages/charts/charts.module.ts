import { NgModule } from '@angular/core';
import { StepLineComponent } from './step-line/step-line.component';
import { BarsComponent } from './bars/bars.component';
import { PieComponent } from './pie/pie.component';
import { NestedPieComponent } from './nested-pie/nested-pie.component';
import { SplineAreaComponent } from './spline-area/spline-area.component';

@NgModule({
  declarations: [
    StepLineComponent,
    BarsComponent,
    PieComponent,
    NestedPieComponent,
    SplineAreaComponent,
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

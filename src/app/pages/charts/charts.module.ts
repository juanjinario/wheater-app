import { NgModule } from '@angular/core';
import { BarsComponent } from './bars/bars.component';

import { FusionchartsModule } from '../component/fusioncharts.module';
import { BarsLineaComponent } from './bars-linea/bars-linea.component';
import { LineaComponent } from './linea/linea.component';

import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    BarsComponent,
    BarsLineaComponent,
    LineaComponent
  ],
  imports: [
    SharedModule,
    FusionchartsModule
  ],
  exports: [
    BarsComponent,
    BarsLineaComponent,
    LineaComponent
  ]
})
export class ChartsModule { }

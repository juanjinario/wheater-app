import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material.module';
import { FusionchartsModule } from './fusioncharts.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Routes
import { AppRoutingModule } from './app.routing';

// Services

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavmenuComponent } from './components/shared/navmenu/navmenu.component';
import { StepLineComponent } from './components/charts/step-line/step-line.component';
import { BarsComponent } from './components/charts/bars/bars.component';
import { PieComponent } from './components/charts/pie/pie.component';
import { NestedPieComponent } from './components/charts/nested-pie/nested-pie.component';
import { SplineAreaComponent } from './components/charts/spline-area/spline-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavmenuComponent,
    StepLineComponent,
    BarsComponent,
    PieComponent,
    NestedPieComponent,
    SplineAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FusionchartsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


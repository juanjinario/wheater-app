import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../pages/component/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    PageHeaderComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    ToastrModule,
    TranslateModule,
    HeaderComponent,
    SidebarComponent,
    PageHeaderComponent,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

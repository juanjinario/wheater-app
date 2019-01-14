import { NgModule } from '@angular/core';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    NavmenuComponent,
    HeaderComponent
  ],
  declarations: [],
  providers: [],
  exports: [
    NavmenuComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

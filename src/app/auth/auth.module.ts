import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LoginComponent,
  ],
  providers: [
      AuthGuard,
      AuthService
  ]
})
export class AuthModule { }

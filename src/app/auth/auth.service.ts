import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basicAuthorization = '';
  // basicAuthorization: string = "Basic " + btoa("arte:user")

  constructor(public http: HttpClient,
              private userService: UserService) {
    // if (!environment.production) { // If we are in dev mode fix the login
    //  this.basicAuthorization = 'Basic ' + btoa('arte:user');
    // }
   }

   isLogged() {
    return this.basicAuthorization !== '';
  }

  login(user: User) {
    // BCryptPasswordEncoder
    this.basicAuthorization = 'Basic ' + btoa(`${user.login}:${user.password}`);
    /* this.userService.getLogin( user ).subscribe({
      next(x) {
        console.log('data: ', x);
        this.basicAuthorization = 'Basic ' + btoa(`${user.login}:${user.password}`);
      },
      error(err) { console.log('errors already caught... will not run'); }
    });*/
  }

  logout() {
    this.basicAuthorization = '';
  }
}

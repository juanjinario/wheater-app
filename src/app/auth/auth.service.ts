import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basicAuthorization = '';
  // basicAuthorization: string = "Basic " + btoa("arte:user")

  constructor(public http: HttpClient) {
    if (!environment.production) { // If we are in dev mode fix the login
      this.basicAuthorization = 'Basic ' + btoa('arte:user');
    }
   }

   isLogged() {
    return this.basicAuthorization !== '';
  }

  login(username: string, password: string) {
    this.basicAuthorization = 'Basic ' + btoa(`${username}:${password}`);
  }

  logout() {
    this.basicAuthorization = '';
  }
}

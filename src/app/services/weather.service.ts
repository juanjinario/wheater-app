import { Injectable } from '@angular/core';
import { ConstUrl } from './const-url';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient
  ) { }

  getAll() {
    return this.http.get(ConstUrl.BASE_URL + ConstUrl.USERS);
  }

  getLogin(user: User) {
    return this.http.post(`${ConstUrl.BASE_URL}${ConstUrl.USERS}/${ConstUrl.LOGIN}`, user).pipe(
      map((res: any) => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res;
      }),
      catchError(err => of([]))
    );
  }
}

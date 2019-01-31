import { Authoritie } from './authoritie.model';

export class User {

  constructor(
    public login: string = '',
    public password: string = '',
    public name: string = '',
    public id: number = 0,
    public address: string = '',
    public avatar: string = '',
    public email: string = '',
    public enabled: boolean = true,
    public locale: string = '',
    public phone: string = '',
    public position: string = '',
    public surname: string = '',
    public authorities: Authoritie[] = [],
  ) { }

}

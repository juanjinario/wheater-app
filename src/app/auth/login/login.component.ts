import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  showSpinner: boolean;

  constructor(private router: Router,
              private authService: AuthService,
              private toastr: ToastrService) {
                this.showInfo();
              }

  ngOnInit() {
  }

  login( ngForm: NgForm ) {
    if (ngForm.invalid) {
      return false;
    }
    this.authService.login(this.editedUser());
    this.router.navigate(['/weather']);
  }

  editedUser(): User {
    const USER = new User(this.username, this.password);
    return USER;
  }

  showInfo() {
    this.toastr.info('Todos los usuarios y contraseñas son válidos', 'Autenticación');
  }

}

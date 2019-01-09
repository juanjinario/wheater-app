import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  showSuccess() {
    console.log('success');
    this.toastr.success('Hello world!', 'Toastr SECCESS!');
  }

  showError() {
    this.toastr.error('Hello world!', 'Toastr ERROR!');
  }

  showInfo() {
    this.toastr.info('Hello world!', 'Toastr Information!');
  }
}

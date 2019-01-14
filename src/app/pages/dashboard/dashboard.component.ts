import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dahsboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

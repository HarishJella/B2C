import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hide = true;
  login_form: string = 'd-flex';
  forgot_password_form: string = 'd-none';
  register_form: string = 'd-none';
  constructor() { }

  ngOnInit() {
  }

  Login() {
    this.login_form = 'd-flex slideInLeft';
    this.register_form = 'd-none slideOutRight';
    this.forgot_password_form = 'd-none slideOutDown';
  }
  Register() {
    this.login_form = 'd-none slideOutLeft';
    this.register_form = 'd-flex slideInRight';
    this.forgot_password_form = 'd-none slideOutDown';
  }
  ForgotPassword() {

    this.login_form = 'd-none slideOutUp';
    this.register_form = 'd-none slideOutUp'
    this.forgot_password_form = 'd-flex slideInUp';


  }

}

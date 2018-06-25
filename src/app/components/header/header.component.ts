import { Component, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

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
  loginActive: string = 'active';
  registerActive: string = '';
  tabIndex: number;
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this._sharedService.tabCurrentIndexSource.subscribe(data => this.tabIndex = data);
  }

  Login() {
    this.login_form = 'd-flex slideInLeft';
    this.register_form = 'd-none slideOutRight';
    this.forgot_password_form = 'd-none slideOutDown';
    // Toggle Active
    this.loginActive = "active";
    this.registerActive = "";
  }
  Register() {
    this.login_form = 'd-none slideOutLeft';
    this.register_form = 'd-flex slideInRight';
    this.forgot_password_form = 'd-none slideOutDown';
    // Toggle Active
    this.loginActive = "";
    this.registerActive = "active";
  }
  ForgotPassword() {

    this.login_form = 'd-none slideOutUp';
    this.register_form = 'd-none slideOutUp'
    this.forgot_password_form = 'd-flex slideInUp';
  }

  tabs(tab: number) {
    this.tabIndex = tab;
    this._sharedService.tabGroup(this.tabIndex);
  }
}

import { ConfigService } from 'src/app/service/config.service';
import { Component, OnInit } from '@angular/core';
import { AuthService, ILoginData } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFailed$ = this.auth.loginFailed$

  loginData: ILoginData = {};

  user$ = this.auth.user$;

  validator = this.config.validator

  constructor(
    private auth: AuthService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.auth.logout();
  }

  tryLogin(): void {
    this.auth.login(this.loginData)
  }

  onFocus(): void {
    this.auth.loginFailed$.next(false)
  }

}
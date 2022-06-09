import { Component, OnInit } from '@angular/core';
import { AuthService, ILoginData } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: ILoginData = {};

  loginFailed!: boolean

  user$ = this.auth.user$;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.logout();    
  }
  
  tryLogin(): void {
    this.auth.login(this.loginData);   
  }

}
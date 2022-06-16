import { Component, OnInit } from '@angular/core';
import { AuthService, ISignUpData } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpFailed$ = this.auth.signUpFailed$

  signupData: ISignUpData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 2,
    avatar: '8'
  };

  user$ = this.auth.user$;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    // this.auth.logout();
  }

  trySignUp(): void {
    this.auth.signup(this.signupData)
  }

  onFocus(): void {
    this.auth.signUpFailed$.next(false)
  }

}

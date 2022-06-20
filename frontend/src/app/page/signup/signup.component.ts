import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpFailed$ = this.auth.signUpFailed$

  signupData: User = new User()

  user$ = this.auth.user$;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    // this.auth.logout();
    this.auth.signUpFailed$.next(false)
  }

  trySignUp(): void {
    this.auth.signup(this.signupData)
  }

  onFocus(): void {
    this.auth.signUpFailed$.next(false)
  }

}

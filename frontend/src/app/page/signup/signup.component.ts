import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/model/user'
import { AuthService } from 'src/app/service/auth.service'
import { ConfigService } from 'src/app/service/config.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpFailed$ = this.auth.signUpFailed$

  signupData: User = new User()

  user$ = this.auth.user$

  validator = this.config.validator

  constructor(
    private auth: AuthService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.auth.signUpFailed$.next(false)
  }

  trySignUp(): void {
    this.auth.signup(this.signupData)
  }

  onFocus(): void {
    this.auth.signUpFailed$.next(false)
  }

}

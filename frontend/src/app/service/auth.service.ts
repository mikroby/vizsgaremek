import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { environment } from 'src/environments/environment'
import { User } from '../model/user'

export interface IAuthModel {
  success: boolean
  accessToken: string
  user: User
  role: number
}

export interface ILoginData {
  email?: string
  password?: string
  // role?: number
}

export interface ISignUpData {
  first_name: string
  last_name: string
  email: string
  password: string
  role: number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginFailed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  signUpFailed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  apiUrl: string = environment.apiUrl

  loginUrl: string = ''

  storageKey: string = 'mesterember'

  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null)

  access_token$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {    
    this.loginUrl = `${this.apiUrl}login`

    const loginInfo = sessionStorage.getItem(this.storageKey)
    if (loginInfo) {
      const loginObject = JSON.parse(loginInfo)
      this.access_token$.next(loginObject.accessToken)
      this.user$.next(loginObject.user)
    }

    this.user$.subscribe({
      next: user => {
        if (!user) {
          // induláskor ide érkezünk:
          // kinullázunk mindent.
          this.loginFailed$.next(false)
          this.signUpFailed$.next(false)

          this.access_token$.next('')
          sessionStorage.removeItem(this.storageKey)

          // this.router.navigate(['/'])
        } else {
          if (user.role === 3) {
            this.router.navigate(['/','admin','dashboard'])
          } else {
            this.router.navigate(['/'])
          }
        }
      }
    })

  }

  get currentUser(): User | null {
    return this.user$.value
  }

  login(loginData: ILoginData): void {
    this.http.post<IAuthModel>(this.loginUrl, loginData).subscribe({
      next: (response: IAuthModel) => {
        this.user$.next(response.user)
        this.access_token$.next(response.accessToken)
        sessionStorage.setItem(this.storageKey, JSON.stringify(response))
      },
      error: (err) => {
        // console.error(err)
        this.loginFailed$.next(true)
      }

    })
  }

  logout(): void {
    this.user$.next(null)
  }

  signup(signupData: ISignUpData): void {

  }

}

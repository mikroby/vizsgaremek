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
  avatar: string
}

export interface ILoginData {
  email?: string
  password?: string
  // role?: number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginFailed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  signUpFailed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  apiUrl: string = environment.apiUrl

  loginUrl: string = ''
  signupUrl: string = ''

  storageKey: string = 'mesterember'

  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null)

  access_token$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.loginUrl = `${this.apiUrl}login`
    this.signupUrl = `${this.apiUrl}signup`

    const loginInfo = sessionStorage.getItem(this.storageKey)
    if (loginInfo) {
      const loginObject = JSON.parse(loginInfo)
      this.access_token$.next(loginObject.accessToken)
      this.user$.next(loginObject.user)
    }

    this.user$.subscribe({
      next: user => {
        if (!user) {
          // start here, initialize.
          this.loginFailed$.next(false)
          this.signUpFailed$.next(false)

          this.access_token$.next('')
          sessionStorage.removeItem(this.storageKey)
          // this.router.navigate(['/'])

        } else {
          this.navigateByRole(user.role)
        }
      }
    })
  }

  get currentUser(): User | null {
    return this.user$.value
  }

  get currentAvatarUrl(): string {
    return `${this.apiUrl}avatar/${this.currentUser?.avatar}`
  }

  login(loginData: ILoginData): void {
    this.http.post<IAuthModel>(this.loginUrl, loginData).subscribe({
      next: (response: IAuthModel) => {
        this.user$.next(response.user)
        this.access_token$.next(response.accessToken)
        sessionStorage.setItem(this.storageKey, JSON.stringify(response))
      },
      error: (error) => {
        // console.error(error)
        this.loginFailed$.next(true)
      }
    })
  }

  logout(): void {
    this.user$.next(null)
  }

  signup(signupData: User): void {
    this.http.post(this.signupUrl, signupData).subscribe({
      next: (response) => {
        // this.router.navigate(['/', 'login'])
        const { email, password } = signupData
        this.login({ email, password })
      },
      error: (error) => {
        // console.error(error)
        this.signUpFailed$.next(true)
      }
    })
  }

  navigateByRole(role: number): void {
    switch (role) {
      case 3:
        this.router.navigate(['/', 'admin'])
        break
      case 2:
        this.router.navigate(['/', 'profile'])
        break
      default:
        this.router.navigate(['/'])
    }
  }

}

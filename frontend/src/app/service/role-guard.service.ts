import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = this.auth.currentUser

    if (!user) {
      this.router.navigate(['/', 'forbidden'])
      return false
    }

    const expectedRole = route.data['expectedRole']
    const role = user.role ? user.role : 0

    if (role < expectedRole) {
      this.router.navigate(['/','forbidden'])
      return false
    }

    return true
  }
}

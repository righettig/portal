// Copyright Genesis Global Solutions

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.authService.isUserLoggedIn()) {
        if (location.hash === '#/' || location.pathname !== state.url.toString()) {
          this.router.navigate([`/dashboard`]);
        }
        resolve(false);
      } else {
        resolve(true);
      }
    });
  }
}

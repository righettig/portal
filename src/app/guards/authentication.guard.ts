// Copyright Genesis Global Solutions

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { DtaService } from '../services/dta.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {

  constructor(
      private router: Router,
      private authService: AuthService,
      private dtaService: DtaService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.dtaService.getDta().isLoggedIn()) {
        resolve(true);
      } else {
        this.authService.reconnect().then(r => {
          resolve(true);
        }).catch(e => {
          this.router.navigate(['/login']);
          reject(e);
        });
      }
    });
  }
  
}

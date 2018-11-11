// Copyright Genesis Global Solutions

import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthzService } from '../services/authz.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private authzService: AuthzService,
    private location: Location,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
    return new Promise((resolve, reject) => {
      // const goingToModule = modulesData.find(module => `/${module.name}` === state.url.toString());
      
      const user = this.authService.getUser();

      if (location.hash === '#/' /*|| (!goingToModule.roles && !goingToModule.permissions)*/) {
        resolve(true);
        return;
      }

      resolve(true);

      // if (this.authzService.canAccess(goingToModule)) {
      //   resolve(true);

      // } else {
      //   if (location.hash !== '#' + state.url.toString()) {
      //     resolve(true);
      //   }

      //   resolve(false);
      // }
    });
  }
}

import { Injectable, isDevMode } from '@angular/core';
import intersection from 'lodash/intersection';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthzService {

  constructor(
    private authService: AuthService) {
  }

  canAccess(moduleOrAction) {
    if (!moduleOrAction.roles) moduleOrAction.roles = [];
    if (!moduleOrAction.permissions) moduleOrAction.permissions = [];

    if (moduleOrAction.roles.length > 0 || moduleOrAction.permissions.length > 0) {
      const rolesOk =
        moduleOrAction.roles.length > 0 ?
          intersection(this.authService.getUser().roles, moduleOrAction.roles).length > 0 : true;

      const permissionsOk =
        moduleOrAction.permissions.length > 0 ?
          intersection(this.authService.getUser().permissions, moduleOrAction.permissions).length > 0 : true;

      return rolesOk && permissionsOk;
    }

    return true;
  }

}

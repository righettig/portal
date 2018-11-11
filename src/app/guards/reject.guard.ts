// Copyright Genesis Global Solutions

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RejectGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate() : Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.authService.isUserLoggedIn()) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/login']);
      }

      resolve(false);
    });
  }
  
}

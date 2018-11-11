// Copyright Genesis Global Solutions

import { Injectable } from '@angular/core';
import { DtaService } from './dta.service';
import { environment } from '../../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private dtaService: DtaService,
    private localStorageService: LocalStorageService) {

    this.user = new UserModel();
  }

  isUserLoggedIn() {
    return this.user.hasAuthToken();
  }

  login(user: UserModel): Promise<any> {
    const loginOptions = {
      url: user.url,
      port: user.port,
      credentials: {
        userName: user.credentials.userName,
        password: user.credentials.password,
        authToken: user.authToken,
        refreshToken: user.refreshToken,
      },
    };

    return new Promise((resolve, reject) => {
      this.dtaService.login(loginOptions, environment.https)
        .then((result) => {

          this.dtaService.getDta().request("USER_DETAILS", {
            requestFields: {
              USER_NAME: user.credentials.userName
            }
          }).then(userDetails => {
            result.REPLY = userDetails.REPLY;

            // Avoiding issues by assigning the empty array when there are no roles for the user
            if (!result.roles) {
              result.roles = [];
            }

            // Avoiding issues by assigning the empty array when there are no permissions for the user
            if (!result.permissions) {
              result.permissions = [];
            }

            this.storeUserData(user, result);

            resolve(result);

          }).fail(err => {
            console.error("Error retrieving USER_DETAILS for " + user.credentials.userName);

            reject(err);
          })

        })
        .fail(err => {
          reject(err);
        });
    });

  }

  reconnect(): Promise<UserModel> {
    const user = this.getUser();

    return new Promise((resolve, reject) => {
      this.user.populateFromLocalStorage(this.localStorageService);

      if (!user.authToken || !user.refreshToken) {
        reject("Missing auth token");
        return;
      }

      this.dtaService.login(this.user, environment.https).then((result) => {
        // BUGFIX: when renewing (or re-using?) tokens we do not get 'roles' and 'permissions' from the DTA level
        // therefore we end up losing authz data
        if (!result.roles && !result.permissions) {
          result.roles = user.roles;
          result.permissions = user.permissions;
        }

        this.storeUserData(user, result);
        resolve(result);

      }).fail((err) => {
        console.error('Error while reconnecting: ', err);
        reject(err);
      });
    });
  }

  logout() {
    this.localStorageService.removeItem('authToken');
    this.localStorageService.removeItem('refreshToken');
    this.localStorageService.removeItem('username');
    this.localStorageService.removeItem('firstName');
    this.localStorageService.removeItem('lastName');
    this.localStorageService.removeItem('roles');
    this.localStorageService.removeItem('permissions');

    return this.dtaService.getDta().logout();
  }

  storeUserData(user: UserModel, result: any) {
    this.user.userName = user.credentials.userName;

    if (!this.user.firstName && result.REPLY) {
      this.user.firstName = result.REPLY[0] ? result.REPLY[0].FIRST_NAME : '';
    }

    if (!this.user.lastName && result.REPLY) {
      this.user.lastName = result.REPLY[0] ? result.REPLY[0].LAST_NAME : '';
    }

    this.user.authToken = result.authToken;
    this.user.refreshToken = result.refreshToken;
    this.user.roles = result.roles;
    this.user.permissions = result.permissions;

    this.localStorageService.setItem('authToken', result.authToken);
    this.localStorageService.setItem('refreshToken', result.refreshToken);
    this.localStorageService.setItem('username', user.credentials.userName);
    this.localStorageService.setItem('firstName', user.firstName);
    this.localStorageService.setItem('lastName', user.lastName);
    this.localStorageService.setItem('url', user.url);
    this.localStorageService.setItem('port', user.port.toString());

    if (user.roles) {
      this.localStorageService.setEncryptedItem(
        'roles',
        user.roles,
        user.credentials.userName);
    }

    if (user.permissions) {
      this.localStorageService.setEncryptedItem(
        'permissions',
        user.permissions,
        user.credentials.userName);
    }
  }

  getUser(): UserModel {
    return this.user;
  }

  private user;

}

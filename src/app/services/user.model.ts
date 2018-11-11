// Copyright Genesis Global Solutions

import { LocalStorageService } from "./local-storage.service";
// import { Role } from './enums';

export class UserModel {

  credentials = { userName: '', password: '' };
  firstName: string;
  lastName: string;
  permissions: any;
  roles: [string];
  authToken: string;
  refreshToken: string;
  url: string;
  port: number;

  populateFromLocalStorage(localStorageService: LocalStorageService) {
    this.authToken = localStorageService.getItem('authToken');
    this.refreshToken = localStorageService.getItem('refreshToken');
    this.credentials.userName = localStorageService.getItem('username');
    this.firstName = localStorageService.getItem('firstName');
    this.lastName = localStorageService.getItem('lastName');
    this.url = localStorageService.getItem('url');
    this.port = Number(localStorageService.getItem('port'));
    this.roles = localStorageService.getEncryptedItem('roles', this.credentials.userName);
    this.permissions = localStorageService.getEncryptedItem('permissions', this.credentials.userName);
  }

  hasAuthToken() {
    return localStorage.getItem('authToken') ? true : false;
  }

  // isAdmin(): boolean {
  //   return this.roles ? this.roles.includes(Role.Admin) : false;
  // }

  get fullName(): string {
    if (this.firstName && this.lastName) {
      return this.firstName + ' ' + this.lastName;
    }

    // fallback
    return this.credentials.userName;
  }

}

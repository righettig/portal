import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserModel } from '../../services/user.model';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

declare var Genesis;

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService) {
  }

  textMessage:string;

  ngOnInit() {   
    this.user = this.authService.getUser();
    this.user.populateFromLocalStorage(this.localStorageService);

    if (environment.credentials) {
      this.user.credentials.userName = environment.credentials.username;
      this.user.credentials.password = environment.credentials.password;
      this.user.url = environment.url;
      this.user.port = environment.port;
    }

    if (this.user.authToken) {
      this.login();
    }
  }

  login() {
    this.loggingIn = true;

    var success = false;
    var timeout =
      setTimeout(() => {
        if (!success) {
          this.loggingIn = false;
          this.alertMessage = "Server is not responding!";
        }

      }, 5000); // TODO: use Constants

    this.authService.login(this.authService.getUser())
      .then(() => {
        this.router.navigate([`/dashboard`]);
      })
      .catch(err => {
        console.log(err);

				switch (err.message) {
          case "MAX_TRIES_REACHED":
            err.error_description = "Too many unsuccessful login attempts";
            break;

					case "UNKNOWN_ACCOUNT":
						err.error_description = "Unknown account";
						break;

					case "INCORRECT_CREDENTIALS":
						err.error_description = "Incorrect credentials";
						break;

					case "PASSWORD_EXPIRED":
						err.error_description = "Password expired";
						this.showResetPassword = true;
						break;

					case undefined:
						if (err.error_description === undefined) {
							err.error_description = "Server unavailable";
						}
						break;
				}

				this.alertMessage = err.error_description;

      })
      .then(() => {
        this.loggingIn = false;

        clearTimeout(timeout);

        success = true;
      });
  }

  cannotLogin() {
    return !this.user.credentials.userName || !this.user.credentials.password;
  }

  cannotSetPassword() {
    return !this.newPassword || !this.confirmPassword || (this.newPassword !== this.confirmPassword);
  }

  setPassword() {
    var ws = new Genesis.NonReconnectingWebSocket(
        environment.url, environment.port, environment.https);

    var networkMgr =
        new Genesis.NetworkManager(ws);

    networkMgr.start();

    var srcRefGen =
        new Genesis.GuidSourceRefGenerator();

    var msgBuilder =
        new Genesis.MessageBuilder();

    var msg =
        msgBuilder.createChangePasswordMessage(
            srcRefGen.newSourceRef(),
            null,
            this.user.credentials.userName,
            ""/*this.oldPassword*/,
            this.newPassword);

     this.settingPassword = true;

    var success = false;
    var timeout =
        setTimeout(() => {
            if (!success) {
                this.settingPassword = false;

                this.alertMessage = "Server is not responding!";
                this.passwordResetSuccess = false;
            }

        }, 5000); // TODO: use Constants

    networkMgr.send(msg,
        (result) => { // success
            this.settingPassword = false;

            clearTimeout(timeout);
            success = true;

            this.alertMessage = "Password successfully set!";
            this.passwordResetSuccess = true;

            setTimeout(() => {
              this.user.credentials.password = this.newPassword;

                this.alertMessage = "Logging in...";
                this.login();

            }, 2000); // TODO: use Constants
        },
        (err) => { // failure
            this.settingPassword = false;

            clearTimeout(timeout);
            success = true;

            this.alertMessage = err.message;
            this.passwordResetSuccess = false;
        });
  }

  private user: UserModel;
  private newPassword: string;
  private confirmPassword: string;

  public loggingIn: boolean;
  private settingPassword: boolean;
  private showResetPassword: boolean;
  private passwordResetSuccess: boolean;

  private alertMessage: string;

  public appName;

}

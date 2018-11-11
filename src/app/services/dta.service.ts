// Copyright Genesis Global Solutions

import { Injectable } from '@angular/core';

declare var Genesis;

export interface IDtaService {
  // CREASTUDIO-548: we now need to "hide" the login operation behind this interface
  // as one of the concrete implementations (DtaSwitcherService) needs to add additional logic on top of it
  // I found this to be a bit of abstraction leaking but I don't have any alternative at the moment
  login(loginOptions, https);

  getDta();
}

@Injectable()
export class DtaService {
  login(loginOptions, https) {
    return this._Dta.login(loginOptions, false, https);
  }

  getDta() {
    return this._Dta;
  }

  private _Dta = new Genesis.DTA();
}
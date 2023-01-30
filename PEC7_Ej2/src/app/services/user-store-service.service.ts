import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreServiceService {
  private _token: string|null = null;
  constructor() { }

  set token(token: string|null) {
    this._token = token;
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    return this.token != null;
  }

  
}

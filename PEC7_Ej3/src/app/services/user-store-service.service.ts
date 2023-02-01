import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreServiceService {
  private _token: string|null = null;
  constructor() { }

  set token(token: string|null) {
    //Guardem el token a la sessió
    localStorage.setItem('token', token? token : '');
    this._token = token;
  }

  get token() {
    //Aquí recuperem el token si es null el valor local
    return this._token? this._token : localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.token != null;
  }

  
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreServiceService } from '../services/user-store-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {
  ruta: Router|null = null;
  constructor(private userStore: UserStoreServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.userStore.isLoggedIn()){
        console.log('no autoritzat');
        this.ruta?.navigateByUrl('login');
      }
      return this.userStore.isLoggedIn();
  }
  
}

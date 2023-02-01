import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { UserStoreServiceService } from '../services/user-store-service.service';

@Injectable()
export class WineAppInterceptorInterceptor implements HttpInterceptor {

  constructor(private userStore: UserStoreServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('INTERCEPTING');
    console.log(this.userStore.token);    
        
    if (this.userStore.token) {
      console.log('INTERCEPTING, HAS TOKEN', this.userStore.token);
      const authReq = request.clone({
        headers: request.headers.set(
          'X-AUTH-HEADER',
          this.userStore.token
        )
      });
      console.log('Making an authorized request');
      console.log(authReq);
      
      request = authReq;
    }
    return next.handle(request)
  }
}

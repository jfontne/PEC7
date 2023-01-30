import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { UserStoreServiceService } from './user-store-service.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor(private http:HttpClient, private userStore:UserStoreServiceService) {}
  
  registerUsr(usuari: User):Observable<any>{
    return this.http.post('/api/user/register',usuari);
  }

  loginUsr(usuari:User):Observable<any>{
    return this.http.post('/api/user/login',usuari).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      console.log('EPP!');
      console.log(resp);
      return resp;
  }));
  }
}

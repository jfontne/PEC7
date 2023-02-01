import { Component } from '@angular/core';
import { UserStoreServiceService } from './services/user-store-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userS:UserStoreServiceService){}
}

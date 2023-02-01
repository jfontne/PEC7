import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WinelistComponent } from 'src/wines/winelist/winelist.component';
import { WineNewComponent } from 'src/wines/wine-new/wine-new.component';
import { WineDetailComponent } from '../wines/wine-detail/wine-detail.component';
import { UserLoginGuard } from './guards/user-login.guard';

const appRoutes: Routes = [   
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //Qualsevol adreça buida et portarà al registre                    
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wine/list', component: WinelistComponent },
  { path: 'wine/create', component: WineNewComponent, canActivate: [UserLoginGuard] },
  { path: 'wine/:id', component: WineDetailComponent },
  { path: '**', redirectTo: 'register' } //Qualsevol adreça errònia et portarà al registre
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),                 
  ],
  exports: [
    RouterModule                                     
  ],
})
export class RoutesAppModule { }

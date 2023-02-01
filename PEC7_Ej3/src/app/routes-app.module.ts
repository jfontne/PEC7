import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [   
  { path: '', redirectTo: 'user/login', pathMatch: 'full' }, //Qualsevol adreça buida et portarà al registre                    
  { path: 'user', loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule)},
  { path: 'wine', loadChildren: () => import('./wines/wines-routing.module').then(m=>m.WineRoutingModule)},
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

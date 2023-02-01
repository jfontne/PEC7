# Crear los siguientes componentes

## User

Per crear el registre dels usuris farem un nou interface **user** amb els camps que volem guardar d'un usuari.

1. Generem el nou interface

~~~~
ng g interface interfaces/user
~~~~

2. Ara donem d'alta els camps de l'interface

~~~~
export interface User {
    username: string,
    password: string
}
~~~~


### login component

~~~~
ng g c user/login
~~~~

### register component

~~~~
ng g c user/register
~~~~

## Wine 

### wineDetail component

~~~~
ng g c wineDetail
~~~~

## Rutes

~~~~
ng g module routesApp --flat --module=app
~~~~

ara configurarem les rutes per poder crear accesos als diferents components de la nostra aplicació

**routes-app.module.ts**

~~~~
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WinelistComponent } from './winelist/winelist.component';
import { WineNewComponent } from './wine-new/wine-new.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';

const appRoutes: Routes = [   
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //Qualsevol adreça buida et portarà al registre                    
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wine/list', component: WinelistComponent },
  { path: 'wine/create', component: WineNewComponent },
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

~~~~


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineDetailComponent } from 'src/app/wines/wine-detail/wine-detail.component';
import { WineNewComponent } from 'src/app/wines/wine-new/wine-new.component';
import { WinelistComponent } from 'src/app/wines/winelist/winelist.component';
import { UserLoginGuard } from '../guards/user-login.guard';

const routes: Routes = [
{ path: 'list', component: WinelistComponent },
{ path: 'create', component: WineNewComponent, canActivate: [UserLoginGuard] },
{ path: ':id', component: WineDetailComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RoutesAppModule } from './routes-app.module';
import { WineAppInterceptorInterceptor } from './interceptors/wine-app-interceptor.interceptor';
import { WineServiceService } from './services/wine-service.service';
import { UserServiceService } from './services/user-service.service';
import { UserStoreServiceService } from './services/user-store-service.service';
import { WineNewComponent } from './wines/wine-new/wine-new.component';
import { WinelistComponent } from './wines/winelist/winelist.component';
import { WineDetailComponent } from './wines/wine-detail/wine-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricePipe } from './pipes/price.pipe';
import { SiNoPipe } from './pipes/si-no.pipe';
import { DefaultImageURLPipe } from './pipes/default-image-url.pipe';
import { WineitemComponent } from './wines/wineitem/wineitem.component';



@NgModule({
  declarations: [
    AppComponent,
    WineNewComponent,
    WinelistComponent,
    WineNewComponent,
    WineitemComponent,
    WineDetailComponent,
    LoginComponent,
    RegisterComponent,
    PricePipe,
    SiNoPipe,
    DefaultImageURLPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutesAppModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    WineServiceService,
    UserServiceService,
    UserStoreServiceService,
    
    { provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptorInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WineitemComponent } from 'src/wines/wineitem/wineitem.component';
import { WinelistComponent } from 'src/wines/winelist/winelist.component';
import { WineNewComponent } from 'src/wines/wine-new/wine-new.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PricePipe } from './pipes/price.pipe';
import { DefaultImageURLPipe } from './pipes/default-image-url.pipe';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WineDetailComponent } from '../wines/wine-detail/wine-detail.component';
import { RoutesAppModule } from './routes-app.module';
import { WineAppInterceptorInterceptor } from './interceptors/wine-app-interceptor.interceptor';
import { SiNoPipe } from './pipes/si-no.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WinelistComponent,
    WineNewComponent,
    PricePipe,
    DefaultImageURLPipe,
    LoginComponent,
    RegisterComponent,
    WineDetailComponent,
    SiNoPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RoutesAppModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptorInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

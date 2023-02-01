import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineRoutingModule } from './wines-routing.module';
import { WineNewComponent } from 'src/app/wines/wine-new/wine-new.component';
import { WineitemComponent } from 'src/app/wines/wineitem/wineitem.component';
import { WineDetailComponent } from 'src/app/wines/wine-detail/wine-detail.component';
import { WinelistComponent } from 'src/app/wines/winelist/winelist.component';
import { DefaultImageURLPipe } from '../pipes/default-image-url.pipe';
import { PricePipe } from '../pipes/price.pipe';
import { SiNoPipe } from '../pipes/si-no.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    WineRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ]
})
export class WineModule { }


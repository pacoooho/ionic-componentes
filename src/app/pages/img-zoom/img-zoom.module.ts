import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgZoomPageRoutingModule } from './img-zoom-routing.module';

import { ImgZoomPage } from './img-zoom.page';
import { Componente } from '../../interfaces/interfaces';
import { ComponentsModule } from '../../components/components.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgZoomPageRoutingModule,
    ComponentsModule,
    NgxIonicImageViewerModule
  ],
  declarations: [ImgZoomPage]
})
export class ImgZoomPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgZoom2PageRoutingModule } from './img-zoom2-routing.module';

import { ImgZoom2Page } from './img-zoom2.page';
import { ComponentsModule } from '../../components/components.module';
import { ZoomDirective } from './zoom.directive';
 @NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgZoom2PageRoutingModule,
    ComponentsModule,
  
  ],
  declarations: [ImgZoom2Page, ZoomDirective]
})
export class ImgZoom2PageModule {}

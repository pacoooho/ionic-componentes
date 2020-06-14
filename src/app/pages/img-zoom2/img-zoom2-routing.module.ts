import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgZoom2Page } from './img-zoom2.page';

const routes: Routes = [
  {
    path: '',
    component: ImgZoom2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgZoom2PageRoutingModule {}

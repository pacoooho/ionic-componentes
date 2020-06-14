import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-zoom2',
  templateUrl: './img-zoom2.page.html',
  styleUrls: ['./img-zoom2.page.scss'],
})
export class ImgZoom2Page implements OnInit {
  titulo: string = "Image Zoom2";
  name = 'Angular';
  images = [
    {
      url: 'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
      fits: 'natural'
    },
    {
      url: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
      fits: 'natural'
    },
    {
      url: 'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
    },
    {
      url: 'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
    }
  ]
  myThumbnail = "https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage = "https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";

  constructor() { }

  ngOnInit() {
  }

}

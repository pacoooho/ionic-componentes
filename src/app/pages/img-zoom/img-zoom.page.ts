import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
 

@Component({
  selector: 'app-img-zoom',
  templateUrl: './img-zoom.page.html',
  styleUrls: ['./img-zoom.page.scss'],
})
export class ImgZoomPage implements OnInit {
titulo:string ="Image Zoom";
prefersDark = false;

imgUrl = `https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?&q=80`;

imgAvatar = {
  id: 237,
  src: 'https://i.picsum.photos/id/237/200/200.jpg',
  srcHighRes: 'https://i.picsum.photos/id/237/3500/2095.jpg',
  author: 'André Spieker'
};
imgThumbnail = {
  id: 1040,
  src: 'https://i.picsum.photos/id/1040/200/200.jpg',
  srcHighRes: 'https://i.picsum.photos/id/1040/4496/3000.jpg',
  author: 'Rachel Davis'
};

constructor(public modalController: ModalController) {}

ngOnInit() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    this.toggleTheme();
  }
}

toggleTheme() {
  this.prefersDark = !this.prefersDark;
  document.body.classList.toggle('dark', this.prefersDark);
}
 
async openViewer() {
  console.log("openViewer");
  const modal = await this.modalController.create({
    component: ViewerModalComponent,
    componentProps: {
      src: this.imgUrl, // required
      title: 'Silhoutte (Programmatic)', // optional
      text: 'Photo by Mayur Gala on Unsplash' // optional
    },
    cssClass: 'ion-img-viewer', // required
    keyboardClose: true,
    showBackdrop: true,
    
  });
 
    await modal.present();
    await modal.onDidDismiss()
    .then((data) => {
      
      const user = data['data']; // Here's your selected user!
      console.log("user",user);
  });
return;
}
}

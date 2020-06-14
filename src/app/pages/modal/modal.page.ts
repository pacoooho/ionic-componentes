import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  titulo: string = "Modal"
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  async abrirModal () {
    console.log("Modal");
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        'nombre': 'Fernando',
        'pais': 'Costa Rica'
      }
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

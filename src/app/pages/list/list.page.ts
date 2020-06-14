import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
titulo:string="list";
usuarios: Observable<any>;
@ViewChild('lista',{static:false}) lista: IonList;

  constructor(private dataservice: DataService,
              private toastController: ToastController ) { }

  ngOnInit() {
this.usuarios=  this.dataservice.getUsers();

  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  favorite(item:any){
    this.presentToast('Guardó en favoritos');
    console.log(item);
    this.lista.closeSlidingItems();
  }
  share(favorite:any){
console.log(favorite);
this.presentToast('Compoartido');
this.lista.closeSlidingItems();
  }

  borrar(unread:any){
    this.presentToast('Borrado');
console.log(unread);
this.lista.closeSlidingItems();
  }

  
}

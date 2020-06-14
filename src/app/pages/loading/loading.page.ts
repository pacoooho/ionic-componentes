import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  titulo: string = "loading";

  loading: any;
  constructor(private loadingControl: LoadingController) { }

  ngOnInit() {
    this.presentLoading("Espere...");

    setTimeout(() => {
      this.loading.dismiss();
    }, 3000);


  }
  async presentLoading(message: string) {
    this.loading = await this.loadingControl.create({
      message,
      // duration: 2000
    });
    return this.loading.present();

  }
}

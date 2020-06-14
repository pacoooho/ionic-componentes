import { Component, OnInit,ViewChild} from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

//import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})  
    
export class ScrollPage implements OnInit {
   @ViewChild(IonInfiniteScroll,{static: false}) public infiniteScroll: IonInfiniteScroll;

//  @ViewChild(IonInfiniteScroll) infinitiScroll: IonInfiniteScroll;
 
  titulo: string = "Scroll";
  data: any[] = Array(20);
d:string="";        
  loadData(e) {    
    console.log('Cargando siguientes...');
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      e.target.complete();
     this.infiniteScroll.disabled=true;
      if (this.data.length > 50) {
              e.target.disabled = true;
            }
     }, 1000);  



  }

  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  //  constructor() { }
  //  loadData(event) {
  //   setTimeout(() => {
  //     console.log('Done');
  //     event.target.complete();

  //     // App logic to determine if all data is loaded
  //     // and disable the infinite scroll
  //     if (data.length == 1000) {
  //       event.target.disabled = true;
  //     }
  //   }, 500);
  // }

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }
  ngOnInit() {
  }

}

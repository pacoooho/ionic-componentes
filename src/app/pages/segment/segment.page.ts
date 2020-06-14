import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Heroes } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
@ViewChild("segmenT",{static:true}) segment: IonSegment;

  titulo:string ="Segment";
  superHeroes : Observable<Heroes[]>
  publisher='';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log("1",this.segment);
    this.superHeroes =   this.dataService.getHeroes();

    this.init();
    }
    init(){
   this.segment.value ='todos';   

   console.log("heroes ",this.superHeroes);
  }
  segmentChanged(event){
    const valorSegmento = event.detail.value;
    if(valorSegmento==='todos'){
      this.publisher = '';
      return;
    }
    this.publisher = valorSegmento;
    console.log("2",event,valorSegmento);

 
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
titulo:string ="Search-Bar";
albunes: any[]=[];
textoBuscar='';
  constructor( private dataService: DataService) { }

  async ngOnInit() {
   this.dataService.getAlbunes().
   subscribe(albunes =>{
    //  console.log(albunes);
     this.albunes=albunes;
   });
  }
  buscar(event){
this.textoBuscar = event.detail.value
   }
}

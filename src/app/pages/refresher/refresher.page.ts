import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
titulo: string ="Refresher";
items : any[]=[];

  constructor() { }

  ngOnInit() {
    console.log(this.items.length);
  }
  doRefresh(event){
    console.log(event);
setTimeout(()=>{
  this.items = Array(40);
  event.target.complete();
},1500)
  }
}

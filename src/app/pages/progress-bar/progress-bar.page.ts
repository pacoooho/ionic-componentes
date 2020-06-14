import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
titulo:string="ProgressBar";
porcentaje: number=0.5;
  constructor() { }

  ngOnInit() {
  }
  cambioRango(event){
    console.log(event.detail.value);
    this.porcentaje= event.detail.value/100;
  }
}

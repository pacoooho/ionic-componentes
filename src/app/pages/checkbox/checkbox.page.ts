import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
titulo:string="checkbox";
public form = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false }
];
data =[
  {
  name:"primary",
  selected:false,
},{
  name:"secondary",
  selected:true,
},{
  name:"tertiary",
  selected:false,
},{
  name:"success",
  selected:true,
}
]
  constructor() { }

  ngOnInit() {
  }
onClick(check){
console.log(check);
}
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Wish } from './register';
import * as $ from 'jquery';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  isOpenTab1 = false;
  isOpenTab3 = false;
  isOpenTab2 = false;
  isOpenTab4 = true;
  currentYear = 2019;
  wish = new Wish
  arrayWish = []
  public ind = 1;
  selectedValue = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.wish = new Wish();
    this.wish.index = this.ind;
    this.arrayWish.push(this.wish)
  }
  addWish(){
    let abc = new Wish();
    this.arrayWish.push(abc);
  }
  removeWish(i){
    this.arrayWish.splice(i,1);
  }
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];
selectedCity: any;

  
}

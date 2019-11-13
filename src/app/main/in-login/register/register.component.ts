import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  isOpenTab1 = true;
  isOpenTab3 = false;
  isOpenTab2 = false;
  isOpenTab4 = false;
  currentYear = 2019;
  constructor() { }

  ngOnInit() {
  }
user = {
  name: "Đinh Minh Khang"
  }
}

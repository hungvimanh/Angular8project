import { Component, OnInit } from '@angular/core';
import { User } from '../../_models';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  currentUser = User;
  constructor() { }

  ngOnInit() {
  }

}

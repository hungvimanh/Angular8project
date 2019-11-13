import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';
import { User } from '@app/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  showModalProfile = false;
  showModalPassword = false;
  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }
  
}

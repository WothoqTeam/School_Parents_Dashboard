import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-parent-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  name: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const token = this.tokenStorageService.getToken();
      const user_name = this.tokenStorageService.getUserName();
      const user_id = this.tokenStorageService.getUserId();
      // console.log("token in header:  " + token);
      // console.log("user_name in header:  " + user_name);
      // console.log("user_id in header:  " + user_id);
      this.name = user_name;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}

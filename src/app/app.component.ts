import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  name: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const token = this.tokenStorageService.getToken();
      const user_name = this.tokenStorageService.getUserName();
      const user_id = this.tokenStorageService.getUserId();
      // console.log("token in app:  " + token);
      // console.log("user_name in app:  " + user_name);
      // console.log("user_id in app:  " + user_id);
      this.name = user_name;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
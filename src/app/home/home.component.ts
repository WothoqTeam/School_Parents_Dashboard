import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { ApplicationService } from '../_services/application.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { SideComponent } from '../shared/side/side.component';
import Axios from "../../../node_modules/axios"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;

  isLoggedIn = false;
  appAll = [];
  
  constructor(private router: Router, private appService: ApplicationService, private tokenStorageService: TokenStorageService) {
    
  };
  //
 
  // 
  token = this.tokenStorageService.getToken();
  user_id = this.tokenStorageService.getUserId();
  // 
  ngOnInit() {
    
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const token = this.tokenStorageService.getToken();
      const user_name = this.tokenStorageService.getUserName();
      const user_id = this.tokenStorageService.getUserId();
      console.log("token in home:  " + token);
      console.log("user_name in home:  " + user_name);
      console.log("user_id in home:  " + user_id);
    };

    this.appService.getAllApp(this.token, this.user_id).subscribe(
      res => {
        this.appAll = res.applications.data;
      },
      err => {
        this.appAll = JSON.parse(err.error).message;
      }
    );

  }
  //
  addOrder(){
    this.router.navigate(['/parent/add-order']);
  }
  //  
  deleteOrder(id){
    const token = this.tokenStorageService.getToken();
    Axios.post(`http://school.wothoq.co/api/admin/applications/destroy`, {
      id,
      token
    }).then((response) => {
      this.appService.getAllApp(this.token, this.user_id).subscribe(
        res => {
          this.appAll = res.applications.data;
        },
        err => {
          this.appAll = JSON.parse(err.error).message;
        }
      );
    });
  }
}

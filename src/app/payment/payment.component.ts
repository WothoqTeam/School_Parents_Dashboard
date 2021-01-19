import { Component, OnInit, ViewChild  } from '@angular/core';
import { ApplicationService } from '../_services/application.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { SideComponent } from '../shared/side/side.component';
import { HeaderComponent } from '../shared/header/header.component';
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SideComponent) side: SideComponent;
  
  isLoggedIn = false;
  
  paymentAll = [];

  constructor( private formBuilder: FormBuilder, private appService: ApplicationService, private tokenStorageService: TokenStorageService) {
  }
  // 
  token = this.tokenStorageService.getToken();
  user_id = this.tokenStorageService.getUserId();
  // 
  
  
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user_name = this.tokenStorageService.getUserName();
      const token = this.tokenStorageService.getToken();
      
    };
    // 
    this.appService.getAllPayments(this.token, this.user_id).subscribe(
      res => {
        this.paymentAll = res.payments;
      },
      err => {
        this.paymentAll = JSON.parse(err.error).message;
      }
    );

  }
  
  
}

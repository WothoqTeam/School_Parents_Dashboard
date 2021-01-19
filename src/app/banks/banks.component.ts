import { Component, ViewChild, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { SideComponent } from '../shared/side/side.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ApplicationService } from '../_services/application.service';
@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SideComponent) side: SideComponent;
  
  isLoggedIn = false;
  
  banks = [];
  constructor(private appService: ApplicationService, private tokenStorageService: TokenStorageService) { }
  token = this.tokenStorageService.getToken();
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user_name = this.tokenStorageService.getUserName();
      const token = this.tokenStorageService.getToken();   
    };
    // 
    this.appService.getAllBanks(this.token).subscribe(
      res => {
        this.banks = res.banks;
      },
      err => {
        this.banks = JSON.parse(err.error).message;
      }
    );
  }

}

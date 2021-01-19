import { Component, OnInit, ViewChild  } from '@angular/core';
import { ApplicationService } from '../_services/application.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { SideComponent } from '../shared/side/side.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-accept-tests',
  templateUrl: './accept-tests.component.html',
  styleUrls: ['./accept-tests.component.css']
})
export class AcceptTestsComponent implements OnInit {

  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SideComponent) side: SideComponent;
  
  isLoggedIn = false;
  
  exams = [];

  constructor( private appService: ApplicationService, private tokenStorageService: TokenStorageService) {
  }
  // 
  token = this.tokenStorageService.getToken();
  user_id = this.tokenStorageService.getUserId();

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user_name = this.tokenStorageService.getUserName();
      const token = this.tokenStorageService.getToken();
      
    };
    // 
    this.appService.getAllExams(this.token, this.user_id).subscribe(
      res => {
        this.exams = res.exams;
      },
      err => {
        this.exams = JSON.parse(err.error).message;
      }
    );
  }

}

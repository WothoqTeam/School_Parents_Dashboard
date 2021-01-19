import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { ApplicationService } from '../_services/application.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { SideComponent } from '../shared/side/side.component';
import {FormBuilder, FormGroup} from "@angular/forms";
import Axios from "../../../node_modules/axios"
const API_URL = 'http://school.wothoq.co/api/admin/applications/get-application-interview';
@Component({
  selector: 'app-interview-tests',
  templateUrl: './interview-tests.component.html',
  styleUrls: ['./interview-tests.component.css']
})
export class InterviewTestsComponent implements OnInit {

  isLoggedIn = false;
  appInterviews = [];

  appAll = [];
  selectForm: FormGroup;
  app_id : any;
  
  constructor( private formBuilder: FormBuilder, private router: Router, private appService: ApplicationService, private tokenStorageService: TokenStorageService) {
    this.app_id = this.getApplications();
  };
  // 
  token = this.tokenStorageService.getToken();
  user_id = this.tokenStorageService.getUserId();
  // 
  getApplications(){
    this.appService.getAllParentApp(this.token, this.user_id).subscribe(
      res => {
        this.appAll = res.applications;
      },
      err => {
        this.appAll = JSON.parse(err.error).message;
      }
    );
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user_name = this.tokenStorageService.getUserName();
      const token = this.tokenStorageService.getToken();
    };
    // 
    this.selectForm = this.formBuilder.group({
      app_id:[]
    });
    //
  }
  onSubmit() {
    const application_id = this.selectForm.get('app_id').value;
    console.log("application_id:" + application_id);

    const token = this.tokenStorageService.getToken();
    // 
    let selectFormData = new FormData();
    selectFormData.append("application_id", this.selectForm.get('app_id').value);

    // 
    Axios.post( API_URL, selectFormData, 
      {
        headers: {
          "Accept": "*/*",
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        }
      }
  )
  .then((res: any) =>{
    console.log(res);
    this.appInterviews = res.data.interview;
  })
  .catch((err) => console.log(err));
  }

}

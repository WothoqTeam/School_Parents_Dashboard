import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { ApplicationService } from '../_services/application.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { SideComponent } from '../shared/side/side.component';
import {FormBuilder, FormGroup} from "@angular/forms";
import Axios from "../../../node_modules/axios"
const INFO_API_URL = 'http://school.wothoq.co/api/admin/applications/get-application-by-id';
const EXAM_API_URL = 'http://school.wothoq.co/api/admin/exams/get-exams-by-application-id';
const INTERVIEW_API_URL = 'http://school.wothoq.co/api/admin/applications/get-application-interview';

@Component({
  selector: 'app-order-datails',
  templateUrl: './order-datails.component.html',
  styleUrls: ['./order-datails.component.css']
})
export class OrderDatailsComponent implements OnInit {
  src = "http://school.wothoq.co/assets/images/applications/GDU8wLE46hiA3V9sRxbJ5IasK2NemQvGteVkvN0J.pdf";
  isLoggedIn = false;
  appExams = [];
  appInfos = [];
  appInterviews = [];
  answers_ids = [];
  ans=[];

  appAll = [];
  selectForm: FormGroup;
  sendAnswer: FormGroup;
  app_id : any;
  showDetails = false;
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
    this.sendAnswer = this.formBuilder.group({
      ans: [],
    });
    // 
  }
  // 
  
  // 
  onSubmit() {
    const application_id = this.selectForm.get('app_id').value;
    console.log("application_id:" + application_id);

    const token = this.tokenStorageService.getToken();
    // 
    let selectFormData = new FormData();
    selectFormData.append("application_id", this.selectForm.get('app_id').value);
    // selectFormData.append("user_id", this.user_id);

    // 
    Axios.post( INFO_API_URL, selectFormData, 
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
      this.appInfos = res.data.application;
      // ******************************************** Interview
      Axios.post( INTERVIEW_API_URL, selectFormData, 
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
      //  ******************************************** /Interview
      //  ******************************************** Exam
      Axios.post( EXAM_API_URL, selectFormData, 
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
        this.appExams = res.data.exams;
      })
      //  ******************************************** /Exam
    .catch((err) => console.log(err));
    //  ********************************************
    this.showDetails = true;
  })
  .catch((err) => console.log(err));
  }
  // 
  onAnsSubmit(){
    // this.answers_ids = this.sendAnswer.get('ans').value;
    // console.log("answers_id:" + this.answers_ids);
  }

}

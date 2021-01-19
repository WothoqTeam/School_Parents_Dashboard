import { Component, OnInit, ViewChild  } from '@angular/core';
import { ApplicationService } from '../_services/application.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { SideComponent } from '../shared/side/side.component';
import { HeaderComponent } from '../shared/header/header.component';
import {FormBuilder, FormGroup} from "@angular/forms";
import Axios from "../../../node_modules/axios"
const API_URL = 'http://school.wothoq.co/api/admin/schedules/get-class-schedule';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SideComponent) side: SideComponent;
  
  isLoggedIn = false;
  
  schedualeAll = [];
  classAll = [];
  selectForm: FormGroup;
  class_id : any;
  days: [];
  daysData: [];
  showDetails = false;
 
  constructor( private formBuilder: FormBuilder, private appService: ApplicationService, private tokenStorageService: TokenStorageService) {
    this.class_id = this.getClassess();
  }
  // 
  token = this.tokenStorageService.getToken();
  user_id = this.tokenStorageService.getUserId();
  // 
  rationNums:any= [
    {id: 1, name: "الحصة الأولى"},
    {id: 2, name: "الحصة الثانية"},
    {id: 3, name: "الحصة الثالثة"},
    {id: 4, name: "الحصة الرابعة"},
    {id: 5, name: "الحصة الخامسة"},
    {id: 6, name: "الحصة السادسة"},
    {id: 7, name: "الحصة السابعة"},
  ];
  // 
  getClassess(){
    this.appService.getAllClasses(this.token).subscribe(
      res => {
        this.classAll = res.classes;
      },
      err => {
        this.classAll = JSON.parse(err.error).message;
      }
    );
  }
  // 
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user_name = this.tokenStorageService.getUserName();
      const token = this.tokenStorageService.getToken();
      
    };
    // 
    this.selectForm = this.formBuilder.group({
      class_id:[]
    });
    // 
   // 
   

  }
  // 
  onSubmit() {
    const class_id = this.selectForm.get('class_id').value;
    console.log("class_id:" + class_id);

    const token = this.tokenStorageService.getToken();
    
    // 
    let selectFormData = new FormData();
    selectFormData.append("class_id", this.selectForm.get('class_id').value);
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
    this.schedualeAll = res.data.schedule;
    for (let i = 0; i < this.schedualeAll.length; i++) {
        let schedualeAllData = this.schedualeAll[i];

        this.days = this.schedualeAll[i].schedule_days;
        console.log(schedualeAllData);

        for (let x = 0; x < this.days.length; x++){
          this.daysData = this.schedualeAll[i].schedule_days[x].day.name;

          console.log(this.daysData);
        }

    }
    this.showDetails = true;
  })
  .catch((err) => console.log(err));
  }
  
  
}

import { costs } from 'src/app/school-board/ViewModels/icosts';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import { ApplicationService } from '../_services/application.service';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { SideComponent } from '../shared/side/side.component';
import Axios from "../../../node_modules/axios"
const API_URL = 'http://school.wothoq.co/api/admin/applications/store';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;

  isLoggedIn = false;
  class_id =[];
  gender =[];
  addForm: FormGroup;
  showModal: boolean = false;
  cost : Number;
  tax : Number;
  total_cost : Number;
  // ******************************************
  constructor(private http: HttpClient, private formBuilder: FormBuilder, 
              private router: Router, private appService: ApplicationService, 
              private tokenStorageService: TokenStorageService) 
    { 
    this.class_id = this.getClasses();
    this.gender = this.getGenders();
  }
  // ******************************************   
  getClasses() {
    return [
      { id: '1', name: 'رياض الاطفال' },
      { id: '2', name: 'أولى ابتدائي' },
      { id: '3', name: 'ثاني ابتدائي' },
      { id: '4', name: 'ثالث ابتدائي' },
      { id: '5', name: 'رابع ابتدائي' },
      { id: '6', name: 'خامس ابتدائي' },
      { id: '7', name: 'سادس ابتدائي' },
      { id: '8', name: 'أولى متوسط' },
      { id: '9', name: 'ثانية متوسط' },
      { id: '10', name: 'ثالث متوسط' },
      { id: '11', name: 'أولى ثانوي' },
      { id: '12', name: 'ثانية ثانوي' },
      { id: '13', name: 'ثالث ثانوي' },
    ];
  };
  getGenders() {
    return [
      { id: '1', name: 'بنين'},
      { id: '2', name: 'بنات' },
    ];
  }
  // ******************************************
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const token = this.tokenStorageService.getToken();
      const user_name = this.tokenStorageService.getUserName();
      const user_id = this.tokenStorageService.getUserId();

      console.log("token in add order:  " + token);
      console.log("user in add order:  " + user_id);
      
    };
    // 
    
    this.addForm = this.formBuilder.group({
      id: ['test'],
      study_year: ['1440'],
      father_full_name: ['testing fater name'],
      father_national_id: ['344324324324324'],
      mobile: ['01024536514'],
      email: ['te@test.com'],
      student_name: ['test'],
      student_national_id: ['344324324324324'],
      date_of_birth: ['2020-02-01'],
      place_of_birth: ['test'],
      class_id: ['1'],
      gender: ['male'],
      nationality: ['test'],
      study_type: ['عام كامل'],
      bus: ['بمواصلات'],
      trip: ['ذهاب او عودة فقط'],
      health_status: ['جيد'],
      civil_status_book: [''],
      certificate_of_vaccination: [''],
      certificate_of_birth: [''],
      student_national_id_photo: [''],
      father_national_id_photo: [''],

    });
    // 

  }
  // ********************************************************
  onFamilySelect(event) {
    if (event.target.files.length > 0) {
      const civil_status_book = event.target.files[0];
      this.addForm.get('civil_status_book').setValue(civil_status_book);
    }
  }

  onGraftSelect(event) {
    if (event.target.files.length > 0) {
      const certificate_of_vaccination = event.target.files[0];
      this.addForm.get('certificate_of_vaccination').setValue(certificate_of_vaccination);
    }
  }

  onBirthPaperSelect(event) {
    if (event.target.files.length > 0) {
      const certificate_of_birth = event.target.files[0];
      this.addForm.get('certificate_of_birth').setValue(certificate_of_birth);
    }
  }

  onStudentPicSelect(event) {
    if (event.target.files.length > 0) {
      const student_national_id_photo = event.target.files[0];
      this.addForm.get('student_national_id_photo').setValue(student_national_id_photo);
    }
  }

  onParentPicSelect(event) {
    if (event.target.files.length > 0) {
      const father_national_id_photo = event.target.files[0];
      this.addForm.get('father_national_id_photo').setValue(father_national_id_photo);
    }
  }
  // 
  // *****************************************************
  onSubmit() {
    const token = this.tokenStorageService.getToken();
    const user_id = this.tokenStorageService.getUserId();
    // 
    let addFormData = new FormData();
    addFormData.append("user_id", user_id);
    addFormData.append("study_year", this.addForm.get('study_year').value);
    addFormData.append("father_full_name", this.addForm.get('father_full_name').value);
    addFormData.append("nationality", this.addForm.get('nationality').value);
    addFormData.append("father_national_id", this.addForm.get('father_national_id').value);
    addFormData.append("student_national_id", this.addForm.get('student_national_id').value);
    addFormData.append("mobile", this.addForm.get('mobile').value);
    addFormData.append("student_name", this.addForm.get('student_name').value);
    addFormData.append("email", this.addForm.get('email').value);
    addFormData.append("gender", this.addForm.get('gender').value);
    addFormData.append("date_of_birth", this.addForm.get('date_of_birth').value);
    addFormData.append("place_of_birth", this.addForm.get('place_of_birth').value);
    addFormData.append("health_status", this.addForm.get('health_status').value);
    addFormData.append("bus", this.addForm.get('bus').value);
    addFormData.append("trip", this.addForm.get('trip').value);
    addFormData.append("study_type", this.addForm.get('study_type').value);
    addFormData.append("class_id", this.addForm.get('class_id').value);
    addFormData.append("civil_status_book", this.addForm.get('civil_status_book').value);
    addFormData.append("certificate_of_vaccination", this.addForm.get('certificate_of_vaccination').value);
    addFormData.append("certificate_of_birth", this.addForm.get('certificate_of_birth').value);
    addFormData.append("student_national_id_photo", this.addForm.get('student_national_id_photo').value);
    addFormData.append("father_national_id_photo", this.addForm.get('father_national_id_photo').value);

    // 
    Axios.post( API_URL, addFormData, 
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
        this.showModal = true;
        this.cost = res.data.application.cost;
        this.tax = res.data.application.tax;
        this.total_cost = res.data.application.total_cost;
        console.log(this.cost);
        console.log(this.tax);
        console.log(this.total_cost);
      })
      .catch((err) => console.log(err));
    // 
   
  }
  // 
  closeModal(){
    this.showModal = false;
  }
  // *****************************************************
  // 
  
}

import { Component, OnInit,ViewChild , NgZone} from '@angular/core';
import { SideSchoolComponent } from 'src/app/school-board/Shared/side/side.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LooginService } from 'src/app/school-board/Services/loogin.service';
import { HttpClient } from '@angular/common/http';
import { BanksService } from 'src/app/school-board/Services/allData';
import { AddDataService } from 'src/app/school-board/Services/adddata.service';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Teacher } from 'src/app/school-board/ViewModels/teacher';
import { HeaderSchoolComponent } from 'src/app/school-board/Shared/header/header.component';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {
  @ViewChild(SideSchoolComponent) side: SideSchoolComponent;
  @ViewChild(HeaderSchoolComponent) head: HeaderSchoolComponent;
  private subscription: Subscription[] = [];
  teacherList: any = [];
  teacher: Teacher[] = [];
  constructor(private router: Router, private Service: LooginService, private http: HttpClient,
    private bankService: BanksService, private addService: AddDataService, private activeRoute: ActivatedRoute,
    public fb: FormBuilder, private ngZone: NgZone, private modalService: NgbModal) { }

  ngOnInit(): void {
    //Teachers
    this.subscription.push(this.bankService.getAllTeacher().subscribe(
      (response: any) => {
        this.teacher = response;
        this.teacherList = response.teachers;
        console.log(this.teacher);
      },
      (err) => {
        console.log(err);
      }
    ));
  }

}

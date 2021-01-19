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
import { Exams } from 'src/app/school-board/ViewModels/IExams';
import { HeaderSchoolComponent } from 'src/app/school-board/Shared/header/header.component';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
  @ViewChild(SideSchoolComponent) side: SideSchoolComponent;
  @ViewChild(HeaderSchoolComponent) head: HeaderSchoolComponent;
  private subscription: Subscription[] = [];
  exam: Exams[] = [];
  examList = [];
  
  constructor(private router: Router, private Service: LooginService, private http: HttpClient,
    private bankService: BanksService, private addService: AddDataService, private activeRoute: ActivatedRoute,
    public fb: FormBuilder, private ngZone: NgZone, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.subscription.push(this.bankService.getAllExams().subscribe(
      (response: any) => {
        this.exam = response;
        this.examList = response.exams;
      },
      (err) => {
        console.log(err);
      }
    ));
  }


}

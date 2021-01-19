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
import { Interviews } from 'src/app/school-board/ViewModels/interviews';
import { HeaderSchoolComponent } from 'src/app/school-board/Shared/header/header.component';

@Component({
  selector: 'app-interview-page',
  templateUrl: './interview-page.component.html',
  styleUrls: ['./interview-page.component.css']
})
export class InterviewPageComponent implements OnInit {
  @ViewChild(SideSchoolComponent) side: SideSchoolComponent;
  @ViewChild(HeaderSchoolComponent) head: HeaderSchoolComponent;
  private subscription: Subscription[] = [];
  interviewList: any = [];
  interview: Interviews[] = [];
  
  constructor(private router: Router, private Service: LooginService, private http: HttpClient,
    private bankService: BanksService, private addService: AddDataService, private activeRoute: ActivatedRoute,
    public fb: FormBuilder, private ngZone: NgZone, private modalService: NgbModal) { }

  ngOnInit(): void {
     //interviews
     this.subscription.push(this.bankService.getAllinterviews().subscribe(
      (response: any) => {
        this.interview = response;
        this.interviewList = response.interviews;
        console.log(this.interview);
      },
      (err) => {
        console.log(err);
      }
    ));

  }

}

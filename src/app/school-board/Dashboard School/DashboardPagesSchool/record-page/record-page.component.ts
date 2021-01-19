import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { SideSchoolComponent } from 'src/app/school-board/Shared/side/side.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LooginService } from 'src/app/school-board/Services/loogin.service';
import { HttpClient } from '@angular/common/http';
import { BanksService } from 'src/app/school-board/Services/allData';
import { AddDataService } from 'src/app/school-board/Services/adddata.service';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Applications } from 'src/app/school-board/ViewModels/iapplications';
import { HeaderSchoolComponent } from 'src/app/school-board/Shared/header/header.component';


@Component({
  selector: 'app-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.css']
})
export class RecordPageComponent implements OnInit {
  @ViewChild(SideSchoolComponent) side: SideSchoolComponent;
  @ViewChild(HeaderSchoolComponent) head: HeaderSchoolComponent;
  private subscription: Subscription[] = [];
  application: Applications[] = [];
  appList: any = [];
  constructor(private router: Router, private Service: LooginService, private http: HttpClient,
    private bankService: BanksService, private addService: AddDataService, private activeRoute: ActivatedRoute,
    public fb: FormBuilder, private ngZone: NgZone, private modalService: NgbModal) { }

  ngOnInit(): void {
     // Applications
     this.subscription.push(this.bankService.getAllapplicatios().subscribe(
      (response: any) => {
        this.application = response;
        this.appList = response.applications.data;
      },
      (err) => {
        console.log(err);
      }
    ));
  }

}

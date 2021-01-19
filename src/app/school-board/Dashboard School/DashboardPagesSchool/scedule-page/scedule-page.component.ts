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
import { Schedule } from 'src/app/school-board/ViewModels/schedule';
import { HeaderSchoolComponent } from 'src/app/school-board/Shared/header/header.component';

@Component({
  selector: 'app-scedule-page',
  templateUrl: './scedule-page.component.html',
  styleUrls: ['./scedule-page.component.css']
})
export class ScedulePageComponent implements OnInit {
  @ViewChild(SideSchoolComponent) side: SideSchoolComponent;
  @ViewChild(HeaderSchoolComponent) head: HeaderSchoolComponent;
  private subscription: Subscription[] = [];
  schedule: Schedule[] = [];
  schedList: any = [];
  
  constructor(private router: Router, private Service: LooginService, private http: HttpClient,
    private bankService: BanksService, private addService: AddDataService, private activeRoute: ActivatedRoute,
    public fb: FormBuilder, private ngZone: NgZone, private modalService: NgbModal) { }

  ngOnInit(): void {
    //Schedule
    this.subscription.push(this.bankService.getAllSchedule().subscribe(
      (response: any) => {
        this.schedule = response;
        this.schedList = response.schedule;
        console.log(this.schedule);
      },
      (err) => {
        console.log(err);
      }
    ));

  }

}

import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AddDataService } from 'src/app/school-board/Services/adddata.service';
import { BanksService } from 'src/app/school-board/Services/allData';
import { LooginService } from 'src/app/school-board/Services/loogin.service';
import { SideSchoolComponent } from 'src/app/school-board/Shared/side/side.component';
import { HeaderSchoolComponent } from 'src/app/school-board/Shared/header/header.component';
import { banks } from 'src/app/school-board/ViewModels/ibanks';

@Component({
  selector: 'app-bank-page',
  templateUrl: './bank-page.component.html',
  styleUrls: ['./bank-page.component.css']
})
export class BankPageComponent implements OnInit {
  @ViewChild(SideSchoolComponent) side: SideSchoolComponent;
  @ViewChild(HeaderSchoolComponent) head: HeaderSchoolComponent;
  bankList: any = [];
  baank: banks[] = [];
  private subscription: Subscription[] = [];
  
  constructor(private router: Router, private http: HttpClient,
              private bankService: BanksService, private addService: AddDataService, private activeRoute: ActivatedRoute,
              public fb: FormBuilder, private ngZone: NgZone, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.subscription.push(this.bankService.getAllBanks().subscribe(
      (response: any) => {
        this.baank = response;
        this.bankList = response.banks;
        console.log(this.baank);
      },
      (err) => {
        console.log(err);
      }
    ));
  }
  filterBank(event: any) {
    console.log(event.target.value);
    let searshableString = event.target.value;
    this.addService.searchBanks(searshableString).subscribe((data: any) => {
      console.log(data);
      this.bankList = data.banks; 
    }, (error: any) => {
      console.log(error);
    });

  }
  // DeleteBank
// tslint:disable-next-line:typedef
Deletebank(id: number) {
    this.subscription.push(this.addService.DeleteBank(id).subscribe(
      (response: any) => {
        this.bankList.splice(id, 1);
        // this.branch = response;
        console.log(this.bankList);
      },
      (err) => {
        console.log(err);
      }
    ));
  }

}

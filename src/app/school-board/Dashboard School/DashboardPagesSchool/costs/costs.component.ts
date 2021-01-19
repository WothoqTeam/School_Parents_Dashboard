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
import { costs } from 'src/app/school-board/ViewModels/icosts';
import { HeaderSchoolComponent } from 'src/app/school-board/Shared/header/header.component';
@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent implements OnInit {
  @ViewChild(SideSchoolComponent) side: SideSchoolComponent;
  @ViewChild(HeaderSchoolComponent) head: HeaderSchoolComponent;
  private subscription: Subscription[] = [];
  Cost: costs[] = [];
  CostList: any = [];
  constructor(private router: Router, private Service: LooginService, private http: HttpClient,
    private bankService: BanksService, private addService: AddDataService, private activeRoute: ActivatedRoute,
    public fb: FormBuilder, private ngZone: NgZone, private modalService: NgbModal) { }

  ngOnInit(): void {
    // Costs
    this.subscription.push(this.bankService.getAllCosts().subscribe(
      (response: any) => {
        this.Cost = response;
        this.CostList = response.costs.data;
        console.log(this.Cost);
      },
      (err) => {
        console.log(err);
      }
    ));
  }
  //DeleteCost
  // tslint:disable-next-line:adjacent-overload-signatures
  DeleteCost(id: number) {

    this.subscription.push(this.addService.DeleteCost(id).subscribe(
      (response: any) => {
        this.CostList.splice(id, 1);
        // this.branch = response;
        console.log(this.Cost);
      },
      (err) => {
        console.log(err);
      }
    ));
  }

}

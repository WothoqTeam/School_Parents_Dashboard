import { Component, OnInit,ViewChild , NgZone} from '@angular/core';
import { SideSchoolComponent } from 'src/app/school-board/Shared/side/side.component';
import { Branch } from 'src/app/school-board/ViewModels/ibranches';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LooginService } from 'src/app/school-board/Services/loogin.service';
import { HttpClient } from '@angular/common/http';
import { BanksService } from 'src/app/school-board/Services/allData';
import { AddDataService } from 'src/app/school-board/Services/adddata.service';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderSchoolComponent } from 'src/app/school-board/Shared/header/header.component';

@Component({
  selector: 'app-branch-page',
  templateUrl: './branch-page.component.html',
  styleUrls: ['./branch-page.component.css']
})
export class BranchPageComponent implements OnInit {
  @ViewChild(SideSchoolComponent) side: SideSchoolComponent;
  @ViewChild(HeaderSchoolComponent) head: HeaderSchoolComponent;
  branchList: any = [];
  branch: Branch[] = [];
  private subscription: Subscription[] = [];

  constructor(private router: Router, private Service: LooginService, private http: HttpClient,
    private bankService: BanksService, private addService: AddDataService,private activeRoute: ActivatedRoute,
    public fb: FormBuilder, private ngZone: NgZone, private modalService: NgbModal) { }

  ngOnInit(): void {
     // Branches
     this.subscription.push(this.bankService.getAllbranches().subscribe(
      (response: any) => {
        this.branch = response;
        this.branchList = response.branches;
        console.log(this.branch);
      },
      (err) => {
        console.log(err);
      }
    ));
  }
  //SearchBranch
  // tslint:disable-next-line:typedef
  public filterBranch(event: any) {

    console.log(event.target.value);
    const searshableString = event.target.value;
    this.addService.searchBranches(searshableString).subscribe((data: any) => {
      console.log(data);
      this.branchList = data.branches; 
    }, (error: any) => {
      console.log(error);
    });

  }
Delete(id: number) {
    this.subscription.push(this.addService.DeleteBranch(id).subscribe(
      (response: any) => {
        this.branchList.splice(id, 1);
        // this.branch = response;
        console.log(this.branch);
      },
      (err) => {
        console.log(err);
      }
    ));
  }
}

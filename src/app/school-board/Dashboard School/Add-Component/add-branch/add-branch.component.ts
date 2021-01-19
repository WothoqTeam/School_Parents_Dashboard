import { Component, OnInit, ViewChild ,NgZone} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddDataService } from 'src/app/school-board/Services/adddata.service';
import { HeaderSchoolComponent } from 'src/app/school-board/Shared/header/header.component';
import { SideSchoolComponent } from 'src/app/school-board/Shared/side/side.component';
import { Branch } from 'src/app/school-board/ViewModels/ibranches';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
  @ViewChild(SideSchoolComponent) side: SideSchoolComponent;
  @ViewChild(HeaderSchoolComponent) head: HeaderSchoolComponent;
  branchList: any = [];
  branch: Branch[] = [];
  private subscription: Subscription[] = [];
  issueForm: FormGroup;
  constructor(private addService: AddDataService,private router: Router,
              private ngZone: NgZone,public fb: FormBuilder) { }

  ngOnInit(): void {
    this.addbranch();
  }
  //AddBranch
  addbranch() {
    this.issueForm = this.fb.group({

      name: [''],
      city: [''],
      district: ['']
    })
  }
  submitForm() {
    this.addService.addBranch(this.issueForm.value).subscribe(res => {
      console.log('Issue added!');
      this.ngZone.run(() => this.router.navigateByUrl('/school/branch'));
    });
  }

}

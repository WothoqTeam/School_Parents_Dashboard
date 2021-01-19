import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LooginService } from 'src/app/school-board/Services/loogin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-loogin',
  templateUrl: './loogin.component.html',
  styleUrls: ['./loogin.component.css']
})
export class LooginComponent implements OnInit {
 
    email: string;
    password: number;

  constructor(private LoginService: LooginService, private router: Router) { }

  ngOnInit(): void {

  }
  userAuth()
  {
    this.LoginService.userAuth(this.email,this.password).subscribe(
      (res:any)=>{
        this.LoginService.login(res.admin.access_token);
        console.log("Authorized");
        console.log(res.admin.access_token);
        this.router.navigateByUrl('/school/home');
      },
      err=>{console.log(err);
      }
    );
  }

}

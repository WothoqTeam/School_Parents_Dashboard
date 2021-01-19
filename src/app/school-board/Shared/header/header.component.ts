import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderSchoolComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  OnLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}

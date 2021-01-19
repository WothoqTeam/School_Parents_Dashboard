import { Component, OnInit, ViewChild} from '@angular/core';
import { HeaderSchoolComponent } from 'src/app/school-board/Shared/header/header.component';
import { SideSchoolComponent } from 'src/app/school-board/Shared/side/side.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeSchoolComponent implements OnInit {
  @ViewChild(SideSchoolComponent) side: SideSchoolComponent;
  @ViewChild(HeaderSchoolComponent) head: HeaderSchoolComponent;

  constructor() { }

  ngOnInit(): void {
  }
}

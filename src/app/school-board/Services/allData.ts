import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { banks } from 'src/app/school-board/ViewModels/ibanks';
import { Applications} from 'src/app/school-board/ViewModels/iapplications';
// import { Ibranches} from 'src/app/school-board/ViewModels/ibranches';
import { Branch} from 'src/app/school-board/ViewModels/ibranches';
import { LooginService } from 'src/app/school-board/Services/loogin.service';
import {costs} from 'src/app/school-board/ViewModels/icosts';
// import {IExams} from 'src/app/school-board/ViewModels/IExams';
import {Exams} from 'src/app/school-board/ViewModels/IExams';
import {Users} from 'src/app/school-board/ViewModels/iusers' ;
import {Teacher} from 'src/app/school-board/ViewModels/teacher' ;
import { Interviews } from 'src/app/school-board/ViewModels/interviews';
import { Classes } from 'src/app/school-board/ViewModels/classes';
import { Schedule } from 'src/app/school-board/ViewModels/schedule';

@Injectable({
  providedIn: 'root'
})
// const tooken:string =localStorage.getItem('usertoken');
export class BanksService {

  constructor(private http: HttpClient, private Service: LooginService) { }
  tooken = localStorage.getItem('usertoken');
  readonly BaseURI = 'http://school.wothoq.co/api';
  readonly BaseURII = 'https://school.wothoq.co/api';

  // GETAllBanks
  getAllBanks(): Observable<banks[]> {
    const newLocal = this.http.post<banks[]>(`${this.BaseURII}/admin/banks/get-all-banks`, this.tooken);
    return newLocal;
  }
  // GETAllschedule
  getAllschedule(): Observable<banks[]> {
    const newLocal = this.http.post<banks[]>(`${this.BaseURII}/admin/banks/get-all-banks`, this.tooken);
    return newLocal;
  }
  // GETAllApplications
  getAllapplicatios(): Observable<Applications[]> {
    const newLocal = this.http.post<Applications[]>(`${this.BaseURII}/admin/applications/get-all-applications`, this.tooken);
    return newLocal;
  }
  // GETAllBranches
  getAllbranches(): Observable<Branch[]> {
    const newLocal = this.http.post<Branch[]>(`${this.BaseURII}/admin/branches/get-all-branches`, this.tooken);
    return newLocal;
  }

  // GET AllExams
  getAllExams(): Observable<Exams[]> {
    const newLocal = this.http.post<Exams[]>(`${this.BaseURII}/admin/exams/getAllExams`, this.tooken);
    return newLocal;
  }

  // GET AllCosts 
  getAllCosts(): Observable<costs[]> {
    const newLocal = this.http.post<costs[]>(`${this.BaseURII}/admin/cost/get-all-studyCosts`, this.tooken);
    return newLocal;
  }

  // GET AllUsers
  getAllUsers(): Observable<Users[]> {
    const newLocal = this.http.post<Users[]>(`${this.BaseURII}/users/get-all-users`, this.tooken);
    return newLocal;
  }
  //getOne User
  getuserById(id: number): Observable<Users> {
    const newLocal = this.http.post<Users>(`${this.BaseURII}/users/get-all-users`, id);
    return newLocal;
  }
  // GET Allinterviews
  getAllinterviews(): Observable<Interviews[]> {
    const newLocal = this.http.post<Interviews[]>(`${this.BaseURII}/admin/interview/get-all-interview`, this.tooken);
    return newLocal;
  }


  // GET AllTeacher
  getAllTeacher(): Observable<Teacher[]> {
    const newLocal = this.http.post<Teacher[]>(`${this.BaseURII}/admin/teachers/get-all-teachers`, this.tooken);
    return newLocal;
  }
  // GET AllClasses
  getAllClasses(): Observable<Classes[]> {
    const newLocal = this.http.post<Classes[]>(`${this.BaseURII}/admin/zoom/get-all-video-classes`, this.tooken);
    return newLocal;
  }
   // GET AllSchedule
   getAllSchedule(): Observable<Schedule[]> {
    const newLocal = this.http.post<Schedule[]>(`${this.BaseURII}/admin/schedules/get-schedule`, this.tooken);
    return newLocal;
  }
}


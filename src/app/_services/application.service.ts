import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

const API_URL = 'http://school.wothoq.co/api/';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  token = this.tokenStorageService.getToken();
  user_id = this.tokenStorageService.getUserId();

  getAllApp(token,user_id): Observable<any> {
    return this.http.post(API_URL + 'admin/applications/get-perent-applications', {token, user_id});
  }
  getAllClasses(token): Observable<any> {
    return this.http.post(API_URL + 'admin/classes/get-all-classes', token);
  }
  getAllParentApp(token,user_id): Observable<any> {
    return this.http.post(API_URL + 'admin/applications/get-all-parent-applications', {token, user_id});
  }

  getAllInterviews(token, application_id): Observable<any> {
    return this.http.post(API_URL + 'admin/applications/get-application-interview', {token, application_id});
  }
  getAllBanks(token): Observable<any> {
    return this.http.post(API_URL + 'admin/banks/get-all-banks', token);
  }
  getAllPayments(token,user_id): Observable<any> {
    return this.http.post(API_URL + 'admin/payments/get-user-payments', {token, user_id});
  }
  getAllExams(token,user_id): Observable<any> {
    return this.http.post(API_URL + 'admin/exams/get-user-exams', {token, user_id});
  }
  

}

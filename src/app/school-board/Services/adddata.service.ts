import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LooginService } from './loogin.service';
import { Branch } from '../ViewModels/ibranches';
import { retry, catchError, map } from 'rxjs/operators';
import { banks } from '../ViewModels/ibanks';
import { costs } from '../ViewModels/icosts';
import { Teacher } from '../ViewModels/teacher';
import { Profile } from '../ViewModels/profile';
import { Classes } from '../ViewModels/classes';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {

  constructor(private http: HttpClient, private Service: LooginService) { }
  
  tooken = localStorage.getItem('usertoken');
  readonly BaseURI = 'https://school.wothoq.co/api';
  public searchResult:any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addBranch(branch: Branch): Observable<Branch> {
    const newBranch = this.http.post<Branch>(`${this.BaseURI}/admin/branches/store`, branch);
    return newBranch;
  }
  DeleteBranch(id: number): Observable<Branch> {
    const delBranch = this.http.post<Branch>(`${this.BaseURI}/admin/branches/destroy`, id);
    return delBranch;
  }
  //Branch Search
 
 searchBranches(name: string): Observable<Branch[]> {
   let searshableobject = {'name': name};
   const newLocal = this.http.post<Branch[]>(`${this.BaseURI}/admin/branches/branches-search`, searshableobject);
   return newLocal;
  }
 
// Update item by id
updateBranch(branch: Branch): Observable<Branch> {
  return this.http.post<Branch>(`${this.BaseURI}/admin/branches/update`, branch);
}

  // AddBank
  addNewBank(bank: banks): Observable<banks> {
    const newBank = this.http.post<banks>(`${this.BaseURI}/admin/banks/store`, bank);
    return newBank;
  }
  //deleteBank
  DeleteBank(id: number): Observable<banks> {
    const delBank = this.http.post<banks>(`${this.BaseURI}/admin/banks/destroy`, id);
    return delBank;
  }

 searchBanks(name: string): Observable<banks[]> {
  let searshableobject1 = {'name': name};
  const newLocal = this.http.post<banks[]>(`${this.BaseURI}/admin/banks/banks-search`, searshableobject1);
  return newLocal;
 }

   // AddCost
   addCost(cost : costs): Observable<costs> {
    const newCost = this.http.post<costs>(`${this.BaseURI}/admin/cost/store`, cost);
    return newCost;
  }
  // DeleteCost
  DeleteCost(id: number): Observable<costs> {
    const delCost= this.http.post<costs>(`${this.BaseURI}/admin/cost/destroy`, id);
    return delCost;
  }

   // AddTeacher
   addTeacher(teach : Teacher): Observable<Teacher> {
    const newCost = this.http.post<Teacher>(`${this.BaseURI}/admin/teachers/store`, teach);
    return newCost;
  }
    // DeleteTeacher
    DeleteTeacher(id: number): Observable<Teacher> {
      const delTeach = this.http.post<Teacher>(`${this.BaseURI}/admin/teachers/destroy`, id);
      return delTeach;
    }

      // AddClass
   addClasses(clas : Classes): Observable<Classes> {
    const newCost = this.http.post<Classes>(`${this.BaseURI}/admin/zoom/meetings`, clas);
    return newCost;
  }
    // DeleteClas
    DeleteClasses(id: number): Observable<Classes> {
      const delClas = this.http.post<Classes>(`${this.BaseURI}/admin/zoom/meetings/delete`, id);
      return delClas;
    }
}

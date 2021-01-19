import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
const NAME_KEY = 'auth-name';
const ID_KEY = 'auth-id';
const app_id = 'app-id';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(access_token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, access_token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUserName(user) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, JSON.stringify(user));
  }

  public getUserName()  {
    return JSON.parse(sessionStorage.getItem(NAME_KEY));
  }
  public saveUserId(user) {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, JSON.stringify(user));
  }

  public getUserId()  {
    return JSON.parse(sessionStorage.getItem(ID_KEY));
  }


  public saveAppId(application_id: string) {
    window.sessionStorage.removeItem(app_id);
    window.sessionStorage.setItem(app_id, application_id);
  }

  public getAppId(): string {
    return sessionStorage.getItem(app_id);
  }
  
}

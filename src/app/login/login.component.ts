import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.user.access_token);
        console.log(data.user.access_token);
        this.tokenStorage.saveUserName(data.user.name);
        console.log(data.user.name);
        this.tokenStorage.saveUserId(data.user.id);
        console.log(data.user.id);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.reloadPage();
        this.router.navigate(['/parent/home']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
 
  reloadPage() {
    window.location.reload();
  }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/Authentication.service';
import { AppService } from './App.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {'username': '', 'password': ''};

  constructor(private app: AppService, 
    private http: HttpClient, 
    private router: Router,
    private authenticationService: AuthenticationService) {
  }
  ngOnInit() {
  }

   login2() {
     let resp = this.app.login(this.credentials.username, this.credentials.password);
     resp.subscribe(data => {
       console.log(data)
      this.router.navigate(["/profile"])
     });
   }

  login() {
    this.authenticationService.authenticationService(this.credentials.username, this.credentials.password).subscribe((result)=> {
      console.log('Login Successful.')
      this.router.navigate(["/profile"]);
    }, () => {
      console.log('this.invalidLogin');
    });      
  }


}

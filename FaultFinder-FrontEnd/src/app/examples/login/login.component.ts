import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'app/models/manager';
import { User } from 'app/models/user';
import { LoginService } from 'app/services/login.service';
import * as $ from 'jquery';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data: Date = new Date();
    focus;
    focus1;


    user = new User();
    manager = new Manager();
    msg = "";


    constructor(private _service : LoginService,private _router : Router) { }


    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    
  loginManager()
  {
      this._service.loginManagerFromRemote(this.manager).subscribe(
        (data: any) => {
          console.log(data);
          console.log("Response Received");
          sessionStorage.clear();
          sessionStorage.setItem('loggedUser', this.manager.email);
          sessionStorage.setItem('USER', "manager");
          sessionStorage.setItem('ROLE', "manager");
          sessionStorage.setItem('managername',this.manager.email);
          sessionStorage.setItem('gender', "male");
          this._router.navigate(['/examples/home']);
         
        },
        (error: { error: any; }) => {
          console.log(error.error);
          this.msg="Bad credentials, please enter valid credentials !!!";
        }
      )
  }
  loginUser()
  {
      this._service.loginUserFromRemote(this.user).subscribe(
        (data: any) => {
          console.log(data);
          console.log("Response Received");
          sessionStorage.setItem('loggedUser', this.user.email);
          sessionStorage.setItem('USER', "user");
          sessionStorage.setItem('ROLE', "user");
          sessionStorage.setItem('name', this.user.email);
          sessionStorage.setItem('gender', "male");
          this._router.navigate(['/examples/home']);
        },
        (error: { error: any; }) => {
          console.log(error.error);
          this.msg="Bad credentials, please enter valid credentials !!!";
        }
      )
  }


}

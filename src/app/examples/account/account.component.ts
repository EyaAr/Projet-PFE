import { Component, OnInit  } from '@angular/core';
import * as Rellax from 'rellax';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Manager } from 'app/models/manager';
import { ManagerService } from 'app/services/manager.service';
import { RegistrationService } from 'app/services/registration.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit  {
  data : Date = new Date();
  focus;
  focus1;


  manager = new Manager();
  msg = ' ';
  
  constructor(private _managerService: ManagerService, private _router: Router,private _registrationService : RegistrationService) { }



  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('account-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('account-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  registerManager()
  {
    this._registrationService.registerManagerFromRemote(this.manager).subscribe(
      data => {
        console.log("Registration Success");
        sessionStorage.setItem("managername",this.manager.managername);
        sessionStorage.setItem("gender",this.manager.gender);
        this._router.navigate(['/examples/login']);
      },
      error => {
        console.log("Registration Failed");
        console.log(error.error);
        this.msg = "Manager with "+this.manager.email+" already exists !!!";
      }
    )
  }
}

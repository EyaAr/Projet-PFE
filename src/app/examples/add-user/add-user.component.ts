import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { RegistrationService } from 'app/services/registration.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{
  data : Date = new Date();
  user = new User();
  msg = ' ';

  constructor(private _registrationService : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }
  registerUser()
  {
    this._registrationService.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("Registration Success");
        sessionStorage.setItem("username",this.user.username);
        sessionStorage.setItem("gender",this.user.gender);
        this._router.navigate(['/examples/user-list']);
      },
      error => {
        console.log("Registration Failed");
        console.log(error.error);
        this.msg = "User with "+this.user.email+" already exists !!!";
      }
    )
  }



}

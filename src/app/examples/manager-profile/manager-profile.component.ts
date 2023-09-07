import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Manager } from 'app/models/manager';
import { ManagerService } from 'app/services/manager.service';

@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.scss']
})
export class ManagerProfileComponent implements OnInit {

  profileDetails : Observable<Manager[]> | undefined;
  manager : Manager = new Manager;
  msg = ' ';
  currRole = '';
  loggedUser = '';
  temp = false;
  data : any;


  constructor(private _service:ManagerService, private activatedRoute: ActivatedRoute, private _router : Router) { }


  ngOnInit(): void {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    
    this.getProfileDetails(this.loggedUser);
  }

  getProfileDetails(loggedUser : string)
  {
    this.profileDetails = this._service.getProfileDetails(this.loggedUser);
    console.log(this.profileDetails);
  }

  updateManagerProfile()
  {
    this._service.UpdateManagerProfile(this.manager).subscribe(
      data => {
        console.log("Manager Profile Updated succesfully");
        this.msg = "Profile Updated Successfully !!!";
        this.temp = true;
      },
      error => {
        console.log("Profile Updation Failed");
        console.log(error.error);
        this.msg = "Profile Updation Failed !!!";
      }
    )
  }


}

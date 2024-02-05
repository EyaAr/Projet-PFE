import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Manager } from 'src/app/models/manager';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-managerprofile',
  templateUrl: './managerprofile.component.html',
  styleUrls: ['./managerprofile.component.css']
})
export class ManagerprofileComponent implements OnInit {

  profileDetails : Observable<Manager[]> | undefined;
  manager : Manager = new Manager;
  msg = ' ';
  currRole = '';
  loggedUser = '';
  temp = false;

  constructor(private _service:ManagerService, private activatedRoute: ActivatedRoute, private _router : Router) { }

  ngOnInit(): void {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    $("#profilecard").show();
    $("#profileform").hide();
    this.getProfileDetails(this.loggedUser);
  }

  editProfile()
  {
    $("#profilecard").hide();
    $("#profileform").show();
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
        $(".editbtn").hide();
        $("#message").show();
        this.temp = true;
        $("#profilecard").show();
        $("#profileform").hide();
        setTimeout(() => {
            this._router.navigate(['/managerdashboard']);
          }, 6000);
      },
      error => {
        console.log("Profile Updation Failed");
        console.log(error.error);
        this.msg = "Profile Updation Failed !!!";
      }
    )
  }

}

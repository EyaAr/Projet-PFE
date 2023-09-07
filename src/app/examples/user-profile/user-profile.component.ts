import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  
  profileDetails : Observable<User[]> | undefined;
  user: User = new User;
  msg = ' ';
  currRole = '';
  loggedUser = '';
  temp = false;
  data : any;


  constructor(private _service: UserService, private activatedRoute: ActivatedRoute, private _router : Router) { }


  ngOnInit(): void 
  {
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

  updateUserProfile()
  {
    this._service.UpdateUserProfile(this.user).subscribe(
      data => {
        console.log("UserProfile Updated succesfully");
        this.msg = "Profile Updated Successfully !!!";
    
        this.temp = true;
     
        setTimeout(() => {
            this._router.navigate(['/examples/home']);
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/models/manager';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent implements OnInit {

  user = new User();
  manager = new Manager();
  msg = ' ';

  constructor(private _Service : AdminService,private _managerService : AdminService, private _router : Router) { }

  ngOnInit(): void {
  }
  addManager()
  {
    this._Service.addManager(this.manager).subscribe(
      data => {
        console.log("manager added Successfully !!!");
        this._router.navigate(['/admindashboard']);
      },
      error => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "manager with "+this.manager.email+" already exists !!!";
      }
    )
  }
  registerUser()
  {

  }

}

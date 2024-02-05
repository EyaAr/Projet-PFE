import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from 'src/app/models/manager';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-managerlist',
  templateUrl: './managerlist.component.html',
  styleUrls: ['./managerlist.component.css']
})
export class ManagerlistComponent implements OnInit {

  loggedUser = '';
  currRole = '';
  managerlist : Observable<Manager[]> | undefined;

  constructor(private _service : ManagerService) { }

  ngOnInit(): void {

    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.managerlist = this._service.getManagerList();

  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from 'app/models/manager';
import { ManagerService } from 'app/services/manager.service';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.scss']
})
export class ManagersListComponent implements OnInit{

  data : any;
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

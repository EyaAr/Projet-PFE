import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from 'app/models/manager';
import { ManagerService } from 'app/services/manager.service';

@Component({
  selector: 'app-approvalstatus',
  templateUrl: './approvalstatus.component.html',
  styleUrls: ['./approvalstatus.component.scss']
})
export class ApprovalstatusComponent implements OnInit{

  currRole = '';
  loggedUser = '';
  approval : Observable<Manager[]> | undefined;
  managerlist : Observable<Manager[]> | undefined;
  responses : Observable<any> | undefined;
  data : any;

  constructor(private _service : ManagerService) { }

  
  ngOnInit(): void 
  {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.managerlist = this._service.getManagerList();
    this.approval = this._service.getManagerListByEmail(this.loggedUser);

   
  }

  acceptRequest(curremail : string)
  {
    this.responses = this._service.acceptRequestForManagerApproval(curremail);
  }

  rejectRequest(curremail : string)
  {
    this.responses = this._service.rejectRequestForManagerApproval(curremail);
  }
}

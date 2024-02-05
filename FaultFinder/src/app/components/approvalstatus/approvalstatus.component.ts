import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from 'src/app/models/manager';
import { ManagerService } from 'src/app/services/manager.service'; 
@Component({
  selector: 'app-approvalstatus',
  templateUrl: './approvalstatus.component.html',
  styleUrls: ['./approvalstatus.component.css']
})
export class ApprovalstatusComponent implements OnInit {

  currRole = '';
  loggedUser = '';
  approval : Observable<Manager[]> | undefined;
  managerlist : Observable<Manager[]> | undefined;
  responses : Observable<any> | undefined;

  constructor(private _service : ManagerService) { }

  ngOnInit(): void 
  {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.managerlist = this._service.getManagerList();
    this.approval = this._service.getManagerListByEmail(this.loggedUser);

    if(this.currRole === 'manager' || this.currRole === 'MANAGER')
    {
      $("#adminapproval").hide();
      $("#managerapproval").show();
    }
    else if(this.currRole === 'admin' || this.currRole === 'ADMIN' && this.loggedUser === 'admin@gmail.com')
    {
      $("#adminapproval").show();
      $("#managerapproval").hide();
    }
  }

  acceptRequest(curremail : string)
  {
    this.responses = this._service.acceptRequestForManagerApproval(curremail);
    $("#acceptbtn").hide();
    $("#rejectbtn").hide();
    $("#acceptedbtn").show();
    $("#rejectedbtn").hide();
  }

  rejectRequest(curremail : string)
  {
    this.responses = this._service.rejectRequestForManagerApproval(curremail);
    $("#acceptbtn").hide();
    $("#rejectbtn").hide();
    $("#acceptedbtn").hide();
    $("#rejectedbtn").show();
  }

}

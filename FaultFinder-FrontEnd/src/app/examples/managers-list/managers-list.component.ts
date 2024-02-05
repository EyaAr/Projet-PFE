import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Manager } from 'app/models/manager';
import { ManagerService } from 'app/services/manager.service';
import * as Rellax from 'rellax';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.scss']
})
export class ManagersListComponent implements OnInit {

  data: any;
  managers: any;
  loggedUser = '';
  currRole = '';
  managerlist: Observable<Manager[]> | undefined;
  constructor(private _service: ManagerService) { }

  ngOnInit(): void {

    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser') || '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE') || '{}');
    this.currRole = this.currRole.replace(/"/g, '');

    this.managerlist = this._service.getManagerList();
    this.managers = this._service.gettotalmanagers();

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  





}

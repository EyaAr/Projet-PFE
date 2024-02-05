import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'app/services/data.service';
import { Data } from 'app/models/data';
import { Router } from '@angular/router';
import * as Rellax from 'rellax';


@Component({
  selector: 'app-databaselist',
  templateUrl: './databaselist.component.html',
  styleUrls: ['./databaselist.component.scss']
})
export class DatabaselistComponent implements OnInit {
  datas: Observable<Data[]>;
  total: Observable<Data[]>;
  data: any;





  constructor(private _Service: DataService, private _router: Router) { }
  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');


    this._Service.getAllDatabases().subscribe(
      (response) => {
        this.data = response;
        console.log('Response:', this.data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.datas = this._Service.getAllDatabases();
    this.total = this._Service.gettotalDatas();

  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }


}

import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';
import * as Rellax from 'rellax';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  users : Observable<User[]> | undefined;
  total : Observable<User[]> | undefined;
  data : Date = new Date();
  user : any;
  constructor(private _serive : UserService) { }

  ngOnInit(): void 
  {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.users = this._serive.getAllUsers();
    this.total = this._serive.getTotalUsers();
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}

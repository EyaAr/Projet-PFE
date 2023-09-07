import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  users : Observable<User[]> | undefined;
  data : Date = new Date();
  user : any;
  constructor(private _serive : UserService) { }

  ngOnInit(): void 
  {
    this.users = this._serive.getAllUsers();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from 'app/models/manager';
import { environment } from 'environments/environment';
import { map } from "rxjs/operators";
import { User } from 'app/models/user';


const NAV_URL = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  manager = new Manager();
  user = new User();


  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user : User)
  {
  return this._http.post<any>(`${NAV_URL}/loginuser`,user).pipe(
    map(
      data => {
        sessionStorage.setItem('USER', user.email);
        sessionStorage.setItem('ROLE', 'USER');
        sessionStorage.setItem('TOKEN', `Bearer ${data.token}`);
        return data;
        }
      )
    );        
  }

  public loginManagerFromRemote(manager : Manager)
  {
    console.log(manager);
    return this._http.post<any>(`${NAV_URL}/loginmanager`,manager).pipe(
    map(
      data => {
        sessionStorage.setItem('USER', manager.email);
        sessionStorage.setItem('ROLE', 'MANAGER');
        sessionStorage.setItem('TOKEN', `Bearer ${data.token}`);
        return data;
        }
      )
    ); 
  }
  isManagerLoggedIn()
{
  let user = sessionStorage.getItem('USER');
  if(user === null || user.length === 0) 
  {
      return false;
  }
  return true;
}

isUserLoggedIn()
{
  let user = sessionStorage.getItem('USER');
  if(user === null || user.length === 0) 
  {
      return false;
  }
  return true;
}
getAuthenticatedToken() {
  return sessionStorage.getItem('TOKEN');
}
getAuthenticatedUser() {
  return sessionStorage.getItem('USER');
}

userType() {
    return sessionStorage.getItem('ROLE');
}

}

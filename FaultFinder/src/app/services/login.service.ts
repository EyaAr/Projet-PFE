import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from '../models/manager';
import { User } from '../models/user';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new User();

  manager = new Manager();

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

isUserLoggedIn()
{
  let user = sessionStorage.getItem('USER');
  if(user === null || user.length === 0) 
  {
      return false;
  }
  return true;
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


isAdminLoggedIn()
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

public adminLoginFromRemote(email: string, password: string)
{
  if(email === 'admin@gmail.com' && password === 'admin123') 
  {
    sessionStorage.setItem('user', email);
    sessionStorage.setItem('ROLE', "admin");
    return true;
  }
  return false;
}

}

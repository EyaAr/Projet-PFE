import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  getAllUsers() : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/userlist`);
  }

  getProfileDetails(loggedUser : string) : Observable<any>
  {
    return this._http.get(`${NAV_URL}/userprofileDetails/`+loggedUser);
  }
  
  UpdateUserProfile(user : any):Observable<any>
  {
    return this._http.put<any>(`${NAV_URL}/updateuser`,user);
  }
  getTotalUsers(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalusers`);
  }

 
}

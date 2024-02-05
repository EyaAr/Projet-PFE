import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Manager } from '../models/manager';
import { User } from '../models/user';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AdminService 
{

  manager = new Manager();

  constructor(private _http : HttpClient) { }

  public addManager(manager : Manager):Observable<any>
  {
    return this._http.post<any>(`${NAV_URL}/addManager`,manager);
  }

  getTotalUsers(): Observable<any[]> 
  {
    return this._http.get<User[]>(`${NAV_URL}/gettotalusers`);
  }

  gettotalmanagers(): Observable<any[]> 
  {
    return this._http.get<Manager[]>(`${NAV_URL}/gettotalmanagers`);
  }

  gettotalClaims(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalClaims`);
  }

  gettotalCompanys(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalCompanys`);
  }

  gettotalDatas(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalDatas`);
  }


 

 

 

  

}

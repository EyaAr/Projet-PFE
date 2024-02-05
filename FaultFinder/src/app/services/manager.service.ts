import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private _http : HttpClient) { }
  
  acceptRequestForManagerApproval(curremail: string): Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/acceptstatus/`+curremail);
  }
  rejectRequestForManagerApproval(curremail: string): Observable<any> 
  {
    return this._http.get<any>(`${NAV_URL}/rejectstatus/`+curremail);
  }

  getManagerList() : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/managerlist`);
  }

  getManagerListByEmail(email : string) : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/managerlistbyemail/`+email);
  }
  getProfileDetails(loggedUser : string) : Observable<any>
  {
    return this._http.get(`${NAV_URL}/managerprofileDetails/`+loggedUser);
  }

  UpdateManagerProfile(manager : any):Observable<any>
  {
    return this._http.put<any>(`${NAV_URL}/updatemanager`,manager);
  }

}

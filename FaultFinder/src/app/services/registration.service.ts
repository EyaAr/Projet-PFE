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
export class RegistrationService {
  user = new User();
  manager = new Manager();

  constructor(private _http : HttpClient) { }

public registerUserFromRemote(user : User):Observable<any>
{
    return this._http.post<any>(`${NAV_URL}/registeruser`,user)
}

public registerManagerFromRemote(manager : Manager):Observable<any>
{
    return this._http.post<any>(`${NAV_URL}/registermanager`,manager)
}

}

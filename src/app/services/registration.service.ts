import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Manager } from 'app/models/manager';
import { User } from 'app/models/user';

const NAV_URL = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  manager = new Manager();
  user = new User();

  constructor(private _http: HttpClient) { }

  public registerManagerFromRemote(manager: Manager): Observable<any> {
    return this._http.post<any>(`${NAV_URL}/registermanager`, manager)
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>(`${NAV_URL}/registeruser`, user)
  }
}

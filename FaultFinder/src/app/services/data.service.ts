import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../models/data';


const NAV_URL = environment.apiURL;



@Injectable({
  providedIn: 'root'
})
export class DataService {

  Data = new Data();

  constructor(private _http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  getAllDatabases() : Observable<any>  
  {
    return this._http.get<any>(`${NAV_URL}/databaseslist`);
  }

  addNewDatabase(Data : Data) : Observable<any>
  {
    return this._http.post<any>(`${NAV_URL}/addDatabase`,Data);
  }

  getData(id : string) : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/getData/`+id);
  }


 

 

}

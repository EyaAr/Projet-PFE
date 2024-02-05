import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../models/data';



const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Data = new Data();

  constructor(private _http : HttpClient) { }


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

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', '\Users\lenovo\Desktop\FaultFinder\FaultFinder-FrontEnd\src\assets\files', formData, {
      reportProgress: true,
    });

    return this._http.request(req);
  }
  gettotalDatas(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalDatas`);
  }
}

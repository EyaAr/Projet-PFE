import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'app/models/company';


const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  Company = new Company();

  constructor(private _http : HttpClient) { }

  
  getAllCompanys() : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/companyslist`);
  }

  addNewCompany(Company : Company) : Observable<any>
  {
    return this._http.post<any>(`${NAV_URL}/addCompany`,Company);
  }
  gettotalCompanys(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalCompanys`);
  }
}

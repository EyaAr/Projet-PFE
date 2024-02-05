import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';



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


  deleteCompany(id: number): Observable<Company> {
    // Make sure to use the correct URL and HTTP options as per your API
    const url = `${NAV_URL}/deleteCompany/${id}`;

    return this._http.delete<Company>(url);
  }
}

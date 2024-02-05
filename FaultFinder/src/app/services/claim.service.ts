import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Claim } from '../models/claim';



const NAV_URL = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  Claim = new Claim();

  constructor(private _http : HttpClient) { }

  getAllClaims() : Observable<any>
  {
    return this._http.get<any>(`${NAV_URL}/claimslist`);
  }

  addNewClaim(Claim : Claim) : Observable<any>
  {
    return this._http.post<any>(`${NAV_URL}/addClaim`,Claim);
  }

  deleteClaim(id: number): Observable<Claim> {
    // Make sure to use the correct URL and HTTP options as per your API
    const url = `${NAV_URL}/deleteClaim/${id}`;

    return this._http.delete<Claim>(url);
  }

  retrieveClaim(id: number): Observable<Claim> {
    // Make sure to use the correct URL and HTTP options as per your API
    const url = `${NAV_URL}/retrieveClaim/${id}`;

    return this._http.get<Claim>(url);
  }

}

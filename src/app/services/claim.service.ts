import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Claim } from 'app/models/claim';
import { Observable } from 'rxjs';




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
}

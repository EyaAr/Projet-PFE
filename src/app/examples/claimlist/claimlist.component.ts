import { Component } from '@angular/core';
import { Claim } from 'app/models/claim';
import { ClaimService } from 'app/services/claim.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claimlist',
  templateUrl: './claimlist.component.html',
  styleUrls: ['./claimlist.component.scss']
})
export class ClaimlistComponent {

  page = 4;
  page1 = 5;
  page2 = 3;


  data : any;
  claims:Observable<Claim[]>; 
  constructor(private _Service :ClaimService, private _router : Router) { }
  ngOnInit(): void {
    /*   this._Service.getAllCompanys().subscribe((res:Observable<Company[]>)=>{
        this.companys=res;
      }); */
      this._Service.getAllClaims().subscribe(
        (response) => {
          this.data = response;
          console.log('Response:', this.data);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
      this.claims = this._Service.getAllClaims();
    }

}

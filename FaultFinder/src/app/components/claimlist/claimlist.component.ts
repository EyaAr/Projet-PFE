import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claim.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claimlist',
  templateUrl: './claimlist.component.html',
  styleUrls: ['./claimlist.component.css']
})
export class ClaimlistComponent implements OnInit {

  claims : Observable<Claim[]> | undefined;

  ClaimObj = new Claim();
  msg = ' '; 


  constructor(private _Service : ClaimService, private _router : Router) { }

  ngOnInit(): void {
    this.claims = this._Service.getAllClaims();
  }

  addNewClaim()
  {
    this._Service.addNewClaim(this.ClaimObj).subscribe(
      data => {
        console.log("claim added Successfully !!!");
        this._router.navigate(['/claimlist']);
      },
      error => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "claim with "+this.ClaimObj.title+" already exists !!!";
      }
    )
  }

  

}

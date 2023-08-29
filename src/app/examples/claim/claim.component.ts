import { Component } from '@angular/core';
import { Claim } from 'app/models/claim';
import { ClaimService } from 'app/services/claim.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent{
 
  claims:Observable<Claim[]>;
  data : any;

  ClaimObj = new Claim();
  msg = ' ';

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

    addNewClaim(){
      this._Service.addNewClaim(this.ClaimObj).subscribe(
        data => {
          console.log("Claim added Successfully !!!");
          this._router.navigate(['/examples/claimlist']);
       /*    window.location.href = 'https://www.linkedin.com/in/taib-boudraa-11b712209/:8080'; */
        },
        error => {
          console.log("Process Failed");
          console.log(error.error);
          
        }
      )
    }
  
  


}
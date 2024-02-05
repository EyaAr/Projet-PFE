import { Component } from '@angular/core';
import { Claim } from 'app/models/claim';
import { ClaimService } from 'app/services/claim.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as Rellax from 'rellax';

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
  total:Observable<Claim[]>; 
  constructor(private _Service :ClaimService, private _router : Router) { }
  ngOnInit(): void {

    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
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
      this.total = this._Service.gettotalClaims();
    }
    ngOnDestroy() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('profile-page');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
    }

}

import { Component } from '@angular/core';
import { Company } from 'app/models/company';
import { CompanyService } from 'app/services/company.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.scss']
})
export class CompanylistComponent {
  companys: Observable<Company[]>;
  total: Observable<Company[]>;
  data: any;

  constructor(private _Service: CompanyService, private _router: Router) { }
  ngOnInit(): void {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    /*   this._Service.getAllCompanys().subscribe((res:Observable<Company[]>)=>{
        this.companys=res;
      }); */
    this._Service.getAllCompanys().subscribe(
      (response) => {
        this.data = response;
        console.log('Response:', this.data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.companys = this._Service.getAllCompanys();
    this.total = this._Service.gettotalCompanys();
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}

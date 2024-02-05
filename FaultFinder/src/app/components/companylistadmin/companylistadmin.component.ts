import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-companylistadmin',
  templateUrl: './companylistadmin.component.html',
  styleUrls: ['./companylistadmin.component.css']
})
export class CompanylistadminComponent implements OnInit {

  companys : Observable<Company[]> | undefined;
  CompanyObj = new Company();
  msg = ' ';


  constructor(private _Service :CompanyService, private _router : Router) { }

  ngOnInit(): void {
    this.companys=this._Service.getAllCompanys();
  }
  deleteCompany(id:number) {
    this._Service.deleteCompany(id).subscribe((res) => {
      alert('Company deleted')
      this._Service.getAllCompanys();
    });
  }

}

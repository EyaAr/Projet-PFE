import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {

  companys : Observable<Company[]> | undefined;
  CompanyObj = new Company();
  msg = ' ';


  constructor(private _Service :CompanyService, private _router : Router) { }

  ngOnInit(): void {
    this.companys=this._Service.getAllCompanys();
  }

  addNewCompany(){
    this._Service.addNewCompany(this.CompanyObj).subscribe(
      data => {
        console.log("Company added Successfully !!!");
        this._router.navigate(['/companyList']);
      },
      error => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "Company with "+this.CompanyObj.name+" already exists !!!";
      }
    )
  }

}

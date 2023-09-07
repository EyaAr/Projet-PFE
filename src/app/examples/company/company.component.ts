import { Component } from '@angular/core';
import { Company } from 'app/models/company';
import { CompanyService } from 'app/services/company.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  companys : Observable<Company[]>;
  data : any;


  CompanyObj = new Company();
  msg = ' ';

  constructor(private _Service :CompanyService, private _router : Router) { }
  ngOnInit(): void {
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
  }

  addNewCompany(){
    this._Service.addNewCompany(this.CompanyObj).subscribe(
      data => {
        console.log("Company added Successfully !!!");
        this._router.navigate(['examples/companylist']);
     /*    window.location.href = 'https://www.linkedin.com/in/taib-boudraa-11b712209/:8080'; */
      },
      error => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "Company with "+this.CompanyObj.name+" already exists !!!";
      }
    )
  }


}

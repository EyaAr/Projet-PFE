import { Component } from '@angular/core';
import { Company } from 'app/models/company';
import { CompanyService } from 'app/services/company.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.scss']
})
export class CompanylistComponent {
  companys : Observable<Company[]>;
  data : any;

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

}

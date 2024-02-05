import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claim.service';
import { Router } from '@angular/router';
import html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-claimlistadmin',
  templateUrl: './claimlistadmin.component.html',
  styleUrls: ['./claimlistadmin.component.css']
})
export class ClaimlistadminComponent implements OnInit {

  claims: Observable<Claim[]> | undefined;

  ClaimObj = new Claim();
  msg = ' ';

  


  constructor(private _Service: ClaimService, private _router: Router) { }

  ngOnInit(): void {
    this.claims = this._Service.getAllClaims();    
  }

  addNewClaim() {
    this._Service.addNewClaim(this.ClaimObj).subscribe(
      data => {
        console.log("claim added Successfully !!!");
        this._router.navigate(['/claimlistadmin']);
      },
      error => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "claim with " + this.ClaimObj.title + " already exists !!!";
      }
    )
  }


  @ViewChild('contentToPrint') contentToPrint!: ElementRef;

  printToPDF() {
    const options = {
      filename: 'printed-page.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    const content = this.contentToPrint.nativeElement;
    html2pdf().from(content).set(options).save();
  }

  

  deleteClaim(id:number) {
    this._Service.deleteClaim(id).subscribe((res) => {
      alert('claim deleted')
      this._Service.getAllClaims();
    });
  }

  retrieveClaim(id:number) {
    this._Service.retrieveClaim(id).subscribe((res) => {
    });
  }



}

import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import { Chart, ChartType, ChartOptions } from 'chart.js';
import { Claim } from 'src/app/models/claim';
import { Data } from 'src/app/models/data';
import { Company } from 'src/app/models/company';
import { ClaimService } from 'src/app/services/claim.service';
import { formatDate } from '@angular/common';
import { Manager } from 'src/app/models/manager';
import { User } from 'src/app/models/user';

import html2pdf from 'html2pdf.js';



@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  


  name = 'admin';
  gender = '';
  loggedUser = '';
  currRole = '';

  users: Observable<any[]> | undefined;

  managers: Observable<any[]> | undefined;
  date = new Date().getFullYear();

  totalClaim: Observable<Claim[]> | undefined;
  totalData: Observable<Data[]> | undefined;
  totalCompany: Observable<Company[]> | undefined;


  //DASHBOARD
  public canvas: any;
  public ctx: any;
  public datasets: any;
  public myChartData: any;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  //chart
  public currentDate = new Date();
  public currentYear = this.currentDate.getFullYear();
  public labels: string[] = [];
  public dataChart: number[] = [];
  public data: any;
  public isLoading: boolean = true;
  public listClaims: Observable<Claim[]> | undefined;

  claims: Observable<Claim[]> | undefined;



  constructor(private _route: Router, private _service: AdminService, private ServiceClaim: ClaimService) { }

  ngOnInit(): void {
    this.claims = this.ServiceClaim.getAllClaims(); 


    this.name = JSON.stringify(sessionStorage.getItem('ROLE') || '{}');
    this.name = this.name.replace(/"/g, '');

    this.gender = JSON.stringify(sessionStorage.getItem('gender') || '{}');
    this.gender = this.gender.replace(/"/g, '');

    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser') || '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE') || '{}');
    this.currRole = this.currRole.replace(/"/g, '');

    this.users = this._service.getTotalUsers();
    this.managers = this._service.gettotalmanagers();

    this.totalClaim = this._service.gettotalClaims();
    this.totalData = this._service.gettotalDatas();
    this.totalCompany = this._service.gettotalCompanys();




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


}

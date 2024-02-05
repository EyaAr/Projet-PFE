import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/app/models/data';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datalistadmin',
  templateUrl: './datalistadmin.component.html',
  template: `
  <canvas #qrCodeCanvas></canvas>
`,
  styleUrls: ['./datalistadmin.component.css']
})
export class DatalistadminComponent implements OnInit {


  datas : Observable<Data[]> | undefined;
  Data : Data| undefined;
  idData :any;

  DataObj = new Data();
  msg = ' ';

  searchVal: string = '';
  listData: Data[] = [];

  constructor(private _Service :DataService, private _router : Router) { }

  ngOnInit(): void {
    this.datas= this._Service.getAllDatabases();

    

  }




}

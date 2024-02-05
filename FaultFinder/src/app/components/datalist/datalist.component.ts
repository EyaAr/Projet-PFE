import { Component, OnInit,Pipe, PipeTransform} from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/app/models/data';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})

export class DatalistComponent implements OnInit {

  datas: Observable<Data[]> | undefined;

  DataObj = new Data();
  msg = ' ';
 

  constructor(private _Service: DataService, private _router: Router) { }

  ngOnInit(): void {
    this.datas = this._Service.getAllDatabases();
   
  }

  addNewDatabase() {
    this._Service.addNewDatabase(this.DataObj).subscribe(
      data => {
        console.log("data added Successfully !!!");
        this._router.navigate(['/dataBaselist']);
      },
      error => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "data with " + this.DataObj.url + " already exists !!!";
      }
    )
  }
    





}

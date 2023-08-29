import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'app/services/data.service';
import { Data } from 'app/models/data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-databaselist',
  templateUrl: './databaselist.component.html',
  styleUrls: ['./databaselist.component.scss']
})
export class DatabaselistComponent implements OnInit {
   datas: Observable<Data[]>;
  data : any;





   constructor(private _Service: DataService, private _router: Router) { }
    ngOnInit() {
    this._Service.getAllDatabases().subscribe(
      (response) => {
        this.data = response;
        console.log('Response:', this.data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.datas = this._Service.getAllDatabases();
  
  }

  


}

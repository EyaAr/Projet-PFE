import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { Observable } from 'rxjs';
import { DataService } from 'app/services/data.service';
import { Data } from 'app/models/data';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  datas: Observable<Data[]>;
  data : any;

  DataObj = new Data();
  msg = ' ';

  selectedFile: File = null;
  uploadProgress: number = 0;
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

  addNewDatabase() {
    this._Service.addNewDatabase(this.DataObj).subscribe(
      data => {
        console.log("data added Successfully !!!");
        this._router.navigate(['examples/databaselist']);
      },
      error => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "data with " + this.DataObj.url + " already exists !!!";
      }
    )
  }

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this._Service.uploadFile(this.selectedFile).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round((event.loaded / event.total) * 100);
        } else if (event.type === HttpEventType.Response) {
          // File upload complete, handle response here
          console.log(event.body);
        }
      });
    }
  }
}

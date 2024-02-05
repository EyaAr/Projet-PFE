import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { RouterModule } from '@angular/router';
import { ManagerService } from 'app/services/manager.service';
import { UserService } from 'app/services/user.service';
import { DataService } from 'app/services/data.service';
import { CompanyService } from 'app/services/company.service';
import { ClaimService } from 'app/services/claim.service';

import { ChatService, Message } from 'app/services/chat.service';
import { Observable, forkJoin } from 'rxjs';
import { Chart } from 'chart.js/auto';
import { Manager } from 'app/models/manager';
import { User } from 'app/models/user';
import { Company } from 'app/models/company';
import { Data } from 'popper.js';
import { Claim } from 'app/models/claim';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  value!: string;
  messages: Message[] = [];

 

  data: Date = new Date();

  page = 4;
  page1 = 5;
  page2 = 3;
  focus;
  focus1;
  focus2;

  date: { year: number, month: number };
  model: NgbDateStruct;

  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;

  state_icon_primary = true;
  


  
  

  constructor(private renderer: Renderer2, config: NgbAccordionConfig, public chatService: ChatService,private managerService: ManagerService) {
    config.closeOthers = true;
    config.type = 'info';
  }
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {

    
    





    var rellaxHeader = new Rellax('.rellax-header');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });

  }
  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }



  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }


  showPopup = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }



}

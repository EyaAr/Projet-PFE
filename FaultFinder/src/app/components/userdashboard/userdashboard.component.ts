import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

import { ChatService, Message } from 'src/app/services/chat.service';



@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  loggedUser = '';
  currRole = '';


  messages: Message[] = [];
  value!: string;









  constructor(private _service: AdminService, public chatService: ChatService) { }

  ngOnInit(): void {

    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser') || '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE') || '{}');
    this.currRole = this.currRole.replace(/"/g, '');

    $("#btn").click(function () {
      $(".sidebar").toggleClass("open");
      menuBtnChange();
    });

    $(".bx-search").click(function () {
      $(".sidebar").toggleClass("open");
      menuBtnChange();
    });

    function menuBtnChange() {
      if ($(".sidebar").hasClass("open")) {
        $("#btn").removeClass("fa-bars").addClass("fa-ellipsis-v");
      } else {
        $("#btn").removeClass("fa-ellipsis-v").addClass("fa-bars");
      }
    }


    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });

  }


  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }




}

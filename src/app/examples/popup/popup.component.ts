import { Component, EventEmitter, Output } from '@angular/core';
import { ChatService,Message } from 'app/services/chat.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

  value!: string;
  messages: Message[] = [];

  constructor(public chatService: ChatService) { }


  ngOnInit(): void {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }
}

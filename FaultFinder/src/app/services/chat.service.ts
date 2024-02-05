import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() { }

  conversation = new Subject<Message[]>();

   messageMap = {
    "hello": "Hello! How can I assist you today? I'm here to help answer your questions and engage in a conversation on a wide range of topics. Just let me know what you'd like to talk about, and I'll do my best to provide you with the information you need.",
    "who are you": "I am a chatbot",
    default: "I apologize if I misunderstood your previous message.",
  } as { [key: string]: string };

 

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));

    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}

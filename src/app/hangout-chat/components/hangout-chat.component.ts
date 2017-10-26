import {Component} from '@angular/core';
import {HangoutChatService} from '../services/hangout-chat.service';
import {ChatMessage} from '../model/chat-message';

@Component({
  moduleId: module.id,
  selector: 'app-hangout-chat',
  templateUrl: 'hangout-chat.component.html',
  styleUrls: ['hangout-chat.component.css']
})

export class HangoutChatComponent {

  messages: ChatMessage[] = [];
  chatTitle = 'Chat';

  constructor(private service: HangoutChatService) {
    this.messages = this.service.getMessages();
    console.log(`Got ${this.messages.length} messages`);
    this.service.getMessageObservable().subscribe((message: ChatMessage) => {
      console.log('Got message', message);
      this.messages.push(message);
    });
    this.service.getClearObservable().subscribe(() => {
      this.messages = [];
    })
  }

  sendMessage(textToSend: string) {
    // TODO: review
    console.log('Sending: ' + textToSend);
    const msg: ChatMessage = {message: textToSend, sentAt: new Date(), source: {name: 'Luigi', image: ''}, mine: true};
    this.service.newMessage(msg);

  }
}

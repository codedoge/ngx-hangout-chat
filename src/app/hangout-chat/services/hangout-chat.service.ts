import {Injectable} from '@angular/core';
import {ChatMessage} from '../model/chat-message';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HangoutChatService {

  private messagesSubject = new Subject<ChatMessage>();

  private clearSubject = new Subject();

  private messages: ChatMessage[];

  constructor() {
    this.clear();
    const myMessage = {message: 'Ciao', sentAt: new Date(), mine: true, source: {name: 'Luigi', image: ''}};
    const otherMessage = {message: 'Ciao', sentAt: new Date(), mine: false, source: {name: 'Mario', image: ''}};
    this.newMessage(myMessage);
    this.newMessage(otherMessage);
    this.newMessage(myMessage);
    this.newMessage(otherMessage);
    this.newMessage(myMessage);
    this.newMessage(otherMessage);
  }

  getMessageObservable(): Observable<ChatMessage> {
    return this.messagesSubject.asObservable();
  }

  getMessages(): ChatMessage[] {
    return this.messages.slice(0);
  }

  newMessage(message: ChatMessage) {
    this.messages.push(message);
    this.messagesSubject.next(message);
  }

  clear() {
    this.messages = [];
    this.clearSubject.next();
  }

  getClearObservable() {
    return this.clearSubject.asObservable();
  }

}

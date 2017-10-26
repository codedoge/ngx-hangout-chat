import {Actor} from './actor';

export interface ChatMessage {

  source: Actor;
  message: string;
  sentAt: Date;
  mine: boolean;

}

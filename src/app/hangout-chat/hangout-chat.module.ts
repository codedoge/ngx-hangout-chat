import {NgModule} from '@angular/core';
import {HangoutChatComponent} from './components/hangout-chat.component';
import {HangoutChatService} from './services/hangout-chat.service';
import {CommonModule} from '@angular/common';
import {FromNowPipe} from './pipes/from-now.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [HangoutChatComponent],
  declarations: [HangoutChatComponent, FromNowPipe],
  providers: [HangoutChatService],
})
export class HangoutChatModule {
}



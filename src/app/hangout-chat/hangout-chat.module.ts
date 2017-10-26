import {NgModule} from '@angular/core';
import {HangoutChatComponent} from './components/hangout-chat.component';
import {HangoutChatService} from './services/hangout-chat.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [HangoutChatComponent],
  providers: [HangoutChatService],
})
export class HangoutChatModule {
}



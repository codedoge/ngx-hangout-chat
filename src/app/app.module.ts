import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HangoutChatModule} from './hangout-chat/hangout-chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HangoutChatModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

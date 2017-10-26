import { NgxChatHangoutPage } from './app.po';

describe('ngx-chat-hangout App', () => {
  let page: NgxChatHangoutPage;

  beforeEach(() => {
    page = new NgxChatHangoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

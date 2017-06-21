import { AtmPage } from './app.po';

describe('atm App', () => {
  let page: AtmPage;

  beforeEach(() => {
    page = new AtmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

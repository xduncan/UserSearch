import { UserSearchPage } from './app.po';

describe('user-search App', () => {
  let page: UserSearchPage;

  beforeEach(() => {
    page = new UserSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

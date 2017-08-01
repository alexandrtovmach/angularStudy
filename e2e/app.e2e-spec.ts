import { AngularStudyPage } from './app.po';

describe('angular-study App', () => {
  let page: AngularStudyPage;

  beforeEach(() => {
    page = new AngularStudyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

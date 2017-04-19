import { SearchProjectAppPage } from './app.po';

describe('search-project-app App', function() {
  let page: SearchProjectAppPage;

  beforeEach(() => {
    page = new SearchProjectAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

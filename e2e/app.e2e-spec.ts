import { ThriftyPage } from './app.po';

describe('thrifty App', function() {
  let page: ThriftyPage;

  beforeEach(() => {
    page = new ThriftyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

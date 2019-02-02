import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the fake date put in place via jasmine.clock().mockDate()', async () => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2040, 0, 1));

    await page.navigateTo();
    const result = await page.getCurrentDateDisplayed();
    expect(result).toEqual('2040-01-01');

    jasmine.clock().uninstall();
  });


});

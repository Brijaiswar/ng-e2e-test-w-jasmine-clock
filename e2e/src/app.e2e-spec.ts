import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {

  beforeAll(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2040, 0, 1));
  });

  afterAll(() => {
    jasmine.clock().uninstall();
  });

  it('should display the fake date put in place via jasmine.clock().mockDate()', async () => {
    const page = new AppPage();
    await page.navigateTo();
    const result = await page.getCurrentDateDisplayed();
    expect(result).toEqual('2040-01-01');
  });

});

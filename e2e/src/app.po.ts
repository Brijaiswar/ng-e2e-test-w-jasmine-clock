import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getCurrentDateDisplayed() {
    return element(by.css('.e2e-curr-date')).getText();
  }
}

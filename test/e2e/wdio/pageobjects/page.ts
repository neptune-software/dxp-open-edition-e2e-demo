import {default as _wdi5} from "wdio-ui5-service";

const wdi5 = new _wdi5();

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
  public async open(path: string) {
    return browser.url(`http://localhost:3000/${path}`);
  }

  public async injectUI5() {
    try {
      await wdi5.injectUI5(browser);
    } catch (error) {
      console.log(error);
    }
  }
}

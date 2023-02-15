import Page from "./page";
 
/**
 * sub page containing specific selectors and methods for a specific page
 */
export class App extends Page {

  public appName: string;
 
  public async open() {
    return super.open(`app/${this.appName}`);
  }
}
 
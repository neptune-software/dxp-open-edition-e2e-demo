import Button from "sap/m/Button";
import Panel from "sap/m/Panel";
import Text from "sap/m/Text";
import {WDI5Control} from "wdio-ui5-service/dist/lib/wdi5-control";
import "dotenv/config";
import { App } from "./app";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Nepte2e_demo extends App {

  public defaultPause: number = 1000;

  public forceSelect: boolean;

  constructor(){
    super();
    this.appName = 'nepte2e_demo';
  } 

  public async oText(): Promise<WDI5Control & Text> {
    const control = await browser.asControl({
      selector: {
        id: "oText",
      },
      forceSelect: this.forceSelect,
    }) as WDI5Control & Text;
 
    return control;
  }

  public async butToggle(): Promise<WDI5Control & Button> {
    const control = await browser.asControl({
      selector: {
        id: "butToggle",
      },
      forceSelect: this.forceSelect,
    }) as WDI5Control & Button;
 
    return control;
  }

}

export default new Nepte2e_demo();

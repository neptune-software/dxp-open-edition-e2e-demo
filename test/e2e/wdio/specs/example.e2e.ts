import nepte2e_demo from "../pageobjects/nepte2e_demo";
import percySnapshot from "@percy/webdriverio";

describe("nepte2e_demo Sample App", () => {
  it("Click Toggle Buitton", async () => {

    await nepte2e_demo.open();
    await nepte2e_demo.injectUI5();

    await browser.pause(2000);
 
    const textBeforeToggle = await (await nepte2e_demo.oText()).getText(false);
    expect(textBeforeToggle).toBe("Text Value A");

    await percySnapshot("Before Toggle", { });

    await (await nepte2e_demo.butToggle()).press();

    const textAfterToggle = await (await nepte2e_demo.oText()).getText(false); 
    expect(textAfterToggle).toBe("Text Value B");
    
    await percySnapshot("After Toggle", { });

  });
});



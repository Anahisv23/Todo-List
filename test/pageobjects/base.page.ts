/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

export default class Base {
    async clickEle(ele: WebdriverIO.Element | ChainablePromiseElement): Promise<void> {
      await ele.waitForDisplayed();
      await ele.click();
    }

    async addText(ele: WebdriverIO.Element | ChainablePromiseElement, text: string): Promise<void> {
      await ele.click();
      await ele.waitForDisplayed();
      await ele.addValue(text)
    }

    async getEle(ele: WebdriverIO.Element | ChainablePromiseElement): Promise<WebdriverIO.Element>  {
      await ele.waitForDisplayed();
      return ele
    }
}



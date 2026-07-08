import { Locator, Page } from "@playwright/test";
import { getEnv } from "../utils/envReader";

export class BasePage{
    constructor(protected page:Page){
      this.page=page
    }
    async click(locator:Locator){
        await locator.click();
    }
    async getText(locator:Locator){
        await locator.textContent();
    }
    async navigate(){
        getEnv()
        await this.page.goto(process.env.BASEURL!)
    }
    async fill(locator:Locator,value:string){
        await locator.fill(value)
    }
}
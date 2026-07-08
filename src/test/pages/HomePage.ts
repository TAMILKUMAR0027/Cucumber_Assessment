import { Locator, Page } from '@playwright/test';
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    readonly page:Page
    readonly loginLink:Locator
    readonly registerLink:Locator
    constructor(page:Page){
        super(page)
        this.page=page;
        this.loginLink=page.locator("//a[@class='ico-login']")
        this.registerLink=page.locator("//a[@class='ico-register']")
    }
    async clickLoginlink(){
        await this.click(this.loginLink)
    }
    async clickRegisterLink(){
        await this.click(this.registerLink)
    }
}
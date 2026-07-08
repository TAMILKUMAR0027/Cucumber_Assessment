import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashbaordPage extends BasePage{
    readonly loggerUsername:Locator;
    readonly logoutButton:Locator
    constructor(page:Page){
        super(page);
        this.loggerUsername=page.locator("//a[normalize-space()='tamil2005@gmail.com']")
        this.logoutButton=page.locator("//a[@class='ico-logout']")
    }
    async getUsername(){
        return await this.getText(this.loggerUsername)
    }
}
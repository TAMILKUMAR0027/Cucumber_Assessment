import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    readonly username:Locator
    readonly password:Locator
    readonly loginButton:Locator
    readonly loginUnsuccessfullMessage:Locator
    constructor(page:Page){
        super(page)
        this.username=page.locator("//input[@id='Email']")
        this.password=page.locator("//input[@id='Password']")
        this.loginButton=page.locator("//input[@value='Log in']")
        this.loginUnsuccessfullMessage=page.locator("//span[contains(text(),'Login was unsuccessful. Please correct the errors ')]")
    }
    async setUsername(username:string){
        await this.fill(this.username,username)
    }
    async setPassword(password:string){
        await this.fill(this.password,password)
    }
    async clickLoginButton(){
        await this.click(this.loginButton)
    }
}
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage{
    readonly genderRadioButton:Locator;
    readonly firstName:Locator;
    readonly lastName:Locator
    readonly email:Locator;
    readonly password:Locator
    readonly retypePassword:Locator
    readonly registerButton:Locator;
    readonly wrongEmail:Locator
    readonly passwordCharacters:Locator
    constructor(page:Page){
        super(page);
        this.genderRadioButton=page.locator("//input[@id='gender-male']")
        this.firstName=page.locator("//input[@id='FirstName']")
        this.lastName=page.locator("//input[@id='LastName']")
        this.email=page.locator("//input[@id='Email']")
        this.password=page.locator("//input[@id='Password']")
        this.retypePassword=page.locator("//input[@id='ConfirmPassword']")
        this.registerButton=page.locator("//input[@id='register-button']")
        this.wrongEmail=page.locator("//span[@for='Email']")
        this.passwordCharacters=page.locator("//span[@for='Password']")
    }
    async clickGender(){
        await this.click(this.genderRadioButton)
    }
    async setFirstName(fn:string){
        await this.fill(this.firstName,fn)
    }
    async setLastName(ln:string){
        await this.fill(this.lastName,ln)
    }
    async setEmail(email:string){
        await this.fill(this.email,email)
    }
    async setPassword(password:string){
        await this.fill(this.password,password)
    }
    async setRetypePassword(retypePassword:string){
        await this.fill(this.retypePassword,retypePassword)
    }
    async clickRegisterButton(){
        await this.click(this.registerButton)
    }
}
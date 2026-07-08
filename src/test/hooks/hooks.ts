
import { After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { BasePage } from "../pages/BasePage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { DashbaordPage } from "../pages/DashboardPage";
import { getEnv } from "../utils/envReader";
import { RegisterPage } from "../pages/RegisterPage";
setDefaultTimeout(60000)
let browser: Browser;
BeforeAll(async () => {
    getEnv();
    browser = await chromium.launch({
        headless: false
    });
});
Before(async function (this: CustomWorld) {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.bp=new BasePage(this.page)
    this.hp=new HomePage(this.page)
    this.lp=new LoginPage(this.page)
    this.dp=new DashbaordPage(this.page)
    this.rp=new RegisterPage(this.page)
});
After(async function (this: CustomWorld) {
    await this.context.close();
    await this.page.close();
});
AfterAll(async () => {
    await browser.close();
});
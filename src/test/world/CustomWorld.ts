import { setWorldConstructor, World } from "@cucumber/cucumber";
import {Browser, BrowserContext, Page} from "@playwright/test"
import { BasePage } from "../pages/BasePage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { DashbaordPage } from "../pages/DashboardPage";
import { RegisterPage } from "../pages/RegisterPage";
export class CustomWorld extends World{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;
    bp!:BasePage;
    hp!:HomePage;
    lp!:LoginPage;
    dp!:DashbaordPage;
    rp!:RegisterPage
}
setWorldConstructor(CustomWorld)
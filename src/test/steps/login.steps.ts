import { Given,When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import { expect } from "@playwright/test";
import loginData from "../test-data/loginData.json";
Given('User on the Home page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.hp.navigate();
});

Given('click login button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
    await this.hp.clickLoginlink();
});

When('User enter email in login page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.lp.setUsername(loginData.valid.username)
});

When('enter password in login page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.lp.setPassword(loginData.valid.password)
});

When('click login Button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.lp.clickLoginButton();
});

Then('User can their username in dashbaord page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await expect(this.dp.loggerUsername).toContainText("tamil")
});
When('User enter invalid email {string} in login page', async function (this:CustomWorld,string) {
  // Write code here that turns the phrase above into concrete actions
    await this.lp.setUsername(string)
});

When('enter invalid password {string} in login page', async function (this:CustomWorld,string) {
  // Write code here that turns the phrase above into concrete actions
    await this.lp.setPassword(string)
});
Then('page should display Login was unsuccessful. Please correct the errors and try again.', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await expect(this.lp.loginUnsuccessfullMessage).toContainText("Login was unsuccessful.")
});
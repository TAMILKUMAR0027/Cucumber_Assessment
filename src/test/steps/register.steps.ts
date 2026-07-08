import { Given,When,Then,DataTable } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import { expect } from "@playwright/test";
import { RegisterData, readRegisterData } from "../utils/csvReader";

const users:RegisterData[]=readRegisterData();
Given('click Register link', async function(this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.hp.clickRegisterLink();
});

When('user enter all the valid details in register page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  const data=users[0]
  await this.rp.clickGender()
  await this.rp.setFirstName(data.firstName);
  await this.rp.setLastName(data.lastName);
  await this.rp.setEmail(data.email+Date.now()+"@gmail.com");
  await this.rp.setPassword(data.password);
  await this.rp.setRetypePassword(data.retypePassword)
 
});

When('click the Register button', async function(this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.rp.clickRegisterButton();
});

Then('user can see the logout button', async function(this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await expect(this.dp.logoutButton).toHaveText("Log out")
});


When('user enter all the invalid details in register page', async function (dataTable:DataTable) {
  // Write code here that turns the phrase above into concrete actions
  const datas=dataTable.rowsHash()
  await this.rp.clickGender()
  await this.rp.setFirstName(datas.firstName);
  await this.rp.setLastName(datas.lastName);
  await this.rp.setEmail(datas.email);
  await this.rp.setPassword(datas.password);
});

When('click the Register Button', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.rp.clickRegisterButton();
});

Then('the page should show invalid', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await expect(this.rp.wrongEmail).toHaveText("Wrong email")
});

Then('password should be atleast six characters', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await expect(this.rp.passwordCharacters).toContainText("The password should have at least 6 characters.")
});
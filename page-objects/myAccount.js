const { expect } = require('@playwright/test');

class MyAccount
{
    constructor(page)
    {
        //locators
        this.page = page;

        this.loginH = page.locator('//h2[text()="Login"]');
        this.loginUserNameInput = page.locator('#username');
        this.loginPassInput = page.locator('#password');
        this.loginButton = page.locator('input[name="login"]');
        this.usernameSignIn = page.locator('//p/strong');

        this.registerH = page.locator('//h2[text()="Register"]');
        this.registerEmailInput = page.locator('#reg_email');
        this.registerPassInput = page.locator('#reg_password');
        this.registerButton = page.locator('input[name="register"]');

        this.ordersLink = page.locator('//a[text()="Orders"]');
    }

    async seeLoginHeader()
    {
        expect(this.loginH).toBeVisible;
    }

    async seeRegisterHeader()
    {
        expect(this.registerH).toBeVisible;
    }

    async fillUserName(username)
    {
        await this.loginUserNameInput.type(username)
    }

    async fillEmail(email)
    {
        await this.registerEmailInput.fill(email);
    }

    async fillPassInput(password)
    {
        await this.loginPassInput.type(password);
    }

    async clickLoginButton()
    {
        await this.loginButton.click();
    }

    async clickRegisterButton()
    {
        await this.registerButton.click();
    }

    async verUsername(username)
    {
        await expect(this.usernameSignIn).toHaveText(username);
    }

    async clickOrdersLink()
    {
        await this.ordersLink.click();
    }
}
module.exports = { MyAccount };
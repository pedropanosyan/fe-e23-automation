const { test, expect } = require('@playwright/test');
const { POManager } = require('../page-objects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../test-data/testData.json")));

let poManager;
let topNav;
let myAccount;

// https://practice.automationtesting.in/test-cases/

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    topNav = poManager.getTopNav();
    myAccount = poManager.getMyAccount();

    await page.goto(dataset.home.url, { viewport: null });
    expect(page).toHaveTitle(dataset.home.title);
});

test('Viewing my orders in my account page', async ({ page }) => {
    await test.step('Go to my account menu', async () => {
        await topNav.clickMyAccountButton();
    });
    await test.step('Fill username input', async () => {
        await myAccount.fillUserName(dataset.user1.username);
    });
    await test.step('Fill password input', async () => {
        await myAccount.fillPassInput(dataset.user1.password);
    });
    await test.step('Click login button', async () => {
        await myAccount.clickLoginButton();
    });
    await test.step('View orders link', async () => {
        await myAccount.clickOrdersLink();
    });
    await test.step('Verify orders page', async () => {
        await expect(page).toHaveURL(dataset.myAccount.url + "orders/");
    });

})
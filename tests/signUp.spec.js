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
    await expect(page).toHaveTitle(dataset.home.title);
});

test('Sign up with valid username and password.', async ({ page }) => {
    await test.step(' Click on My Account Menu', async () => {
        await topNav.clickMyAccountButton();
        await myAccount.seeRegisterHeader();
    })

    await test.step('Enter email in register input', async () => {
        const randomNumber = Math.floor(Math.random() * 10000);
        const emailWithRandomNumber = `${dataset.registerUser.email}${randomNumber}`;
        await myAccount.fillEmail(emailWithRandomNumber);
    });

    await test.step('Enter password in register input', async () => {
        await myAccount.fillPassInput(dataset.registerUser.password);
    });

    await test.step('Click on register button', async () => {
        await myAccount.clickRegisterButton();
    });

    await test.step('User must successfully register to the web page', async () => {
        await expect(page).toHaveTitle(dataset.myAccount.title);
    });
});

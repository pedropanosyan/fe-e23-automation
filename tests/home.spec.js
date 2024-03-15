const { test, expect } = require('@playwright/test');
const { POManager } = require('../page-objects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../test-data/testData.json")));

let poManager;
let topNav;
let myAccount;
let home;

// https://practice.automationtesting.in/test-cases/

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    topNav = poManager.getTopNav();
    myAccount = poManager.getMyAccount();
    home = poManager.getHome();

    await page.goto(dataset.home.url, { viewport: null });
    expect(page).toHaveTitle(dataset.home.title);
});

test('Home page with three arrivals only', async () => {
    await test.step('Go to shop', async () => {
        await topNav.clickShopButton();
    });
    await test.step('Go to home', async () => {
        await topNav.clickHomeButton();
    });
    await test.step('Check the number of arrivals', async () => {
        const count = await home.getArrivalsCount();
        expect(count).toBe(3);
    });

})
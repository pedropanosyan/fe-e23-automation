const { test, expect } = require('@playwright/test');
const { POManager } = require('../page-objects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../test-data/testData.json")));

let poManager;
let topNav;
let myAccount;
let shop;

// https://practice.automationtesting.in/test-cases/

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    topNav = poManager.getTopNav();
    myAccount = poManager.getMyAccount();
    shop = poManager.getShop();

    await page.goto(dataset.home.url, { viewport: null });
    expect(page).toHaveTitle(dataset.home.title);
});

test('Shop page and category filter', async () => {
    await test.step('Go to shop', async () => {
        await topNav.clickShopButton();
    });
    await test.step('Click android category', async () => {
        await shop.clickAndroidCategory();
    });
    await test.step('Check the number of books in android category', async () => {
        const count = await shop.getAndroidCategoryBooks();
        expect(count).toBe(1);
    });


})
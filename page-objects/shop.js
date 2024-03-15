const { expect } = require('@playwright/test');

class Shop
{
    constructor(page)
    {
        //locators
        this.page = page;
        this.androidCategory = page.locator('.product-categories > li:nth-child(1) > a');
        this.androidCategoryBooks = page.locator('#content > ul');
    }

    async clickAndroidCategory()
    {
        await this.androidCategory.click();
    }

    async getAndroidCategoryBooks()
    {
        return await this.androidCategoryBooks.count();
    }
}
module.exports = { Shop };
const { expect } = require('@playwright/test');

class Home
{
    constructor(page)
    {
        //locators
        this.page = page;
        this.arrivals = page.locator('.products > li');
    }

    async getArrivalsCount()
    {
        return await this.arrivals.count();
    }

}
module.exports = { Home };
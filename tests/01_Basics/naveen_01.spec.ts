import { test, expect, Locator } from "@playwright/test";
test("verify playwright locators", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");
    //1)page.getByAlttext()-->identify image based on alt attribute
    //  page.getByAltText("nopCommerce demo store")
    const logo: Locator = page.getByAltText("nopCommerce demo store")
    //logo.click();
    await expect(logo).toBeVisible();

});
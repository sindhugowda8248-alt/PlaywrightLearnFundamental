import { chromium, Browser, BrowserContext, Page } from 'playwright';
async function run() {
    //level 1: Launch browser
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("browser launched", browser);

    // Level 2: create context
    let context: BrowserContext = await browser.newContext();
    console.log("context created", context);

    // Level 3: create page
    let Page: Page = await context.newPage();
    console.log("page opened");

    await Page.goto("https://example.com");
    console.log("Title:", await Page.title());

    await Page.close();
    await context.close();
    await browser.close();


}
run();
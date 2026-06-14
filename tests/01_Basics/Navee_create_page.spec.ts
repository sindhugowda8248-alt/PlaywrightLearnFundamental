import { test,expect,chromium} from '@playwright/test';
test ('handle page/windows',async()=>
    {

//TO LAUNCH THE BROWSER
const browser=await chromium.launch();

//TO CREATE A NEW BROWSER CONTEXT
const context=await browser.newContext();

//TO CREATE A NEW PAGE
const page1=await context.newPage();
const page2=await context.newPage();

//TO COUNT THE NUMBER OF PAGES
const allPages=context.pages();
console.log("no of pages created:",allPages.length);

//to naviagte to particular url
await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 await expect (page1).toHaveTitle("OrangeHRM");
await page2.goto("https://orangehrm.com/");
await expect (page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM");
await browser.close();
await context.close();
await page1.close();
await page2.close();
});
import{test,expect,chromium} from '@playwright/test';
test('handle tabs',async()=>{
//TO LAUNCH THE BROWSER
const browser=await chromium.launch();
//TO CREATE A NEW BROWSER CONTEXT
const context=await browser.newContext();
//To create a new page
const parentpage=await context.newPage();
//to navigate to particular url
await parentpage.goto("https://testautomationpractice.blogspot.com/");
//context.waitForEvent('page');
//parentpage.locator("button:has-text('new tab')").click();

const[childpage]=await Promise.all([context.waitForEvent('page'),parentpage.locator("button:has-text('new tab')").click()]);

//approach 1:switch b/w pages and get titles
//it return num of pages
const allpages=context.pages();
console.log("NO of pages created:",allpages.length);

console.log("title of parent page:",await allpages[0].title());
console.log("title of childpage:",await allpages[1].title());

});

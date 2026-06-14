import{test,expect,chromium} from '@playwright/test';
test('handle tabs',async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    //multiple popups
    //page.waitForEvent('popup');
    //await page.locator("button:has-text('new window')").click();
  await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()]);

  const allpopwindows=context.pages();
  console.log(allpopwindows.length);
  console.log(allpopwindows[0].url())
  console.log(allpopwindows[1].url())

  for (const pw of allpopwindows)
  {
const title=await pw.title();
if(title.includes("playwright"))
{
    await pw.locator('.getstarted_json').click();
    await page.waitForTimeout(5000);
    await pw.close();
}
  }
  await page.waitForTimeout(5000);
});
import{test,expect} from '@playwright/test';
test("verify vwo login page",async({page})=>{

await page.goto("https://app.vwo.com/#/login");
await page.getByRole('textbox',{name:'email'}).fill('abc@gmail.com');
await page.getByRole('textbox', { name: 'password' }).fill('1234');
//await page.getByRole('button',{name:'login.login(event)'}).click();
await page.getByRole('button', { name: 'Sign in',exact:true}).click();


const notification = page.locator('#js-notification-box-msg');
await expect(notification).toContainText('Your email, password, IP address or location did not match');
})
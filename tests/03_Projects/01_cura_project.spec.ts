import{test,expect} from '@playwright/test';
test("verify cura projects",async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    await page.locator("#btn-make-appointment").click();
    await expect (page).toHaveURL("https://katalon-demo-cura.herokuapp.com/profile.php#login");

   // let username=page.getByPlaceholder("Username");
    //let password=page.getByPlaceholder("Password");
    await page.locator('input[placeholder="Username"]').fill("John Doe");
    await page.locator('input[placeholder="Password"]').fill("ThisIsNotAPassword");
    await page.locator("#btn-login").click();

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

    await expect(page.getByText('Make Appointment')).toBeVisible();
    
    
})
import {test,expect,Locator} from '@playwright/test';
test ("verify playwright locators",async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");

  //1.page.getByAltText()--->identifies images based on their alt text

  //  const logo:Locator=page.getByAltText('nopCommerce demo store');
  //  await expect(logo).toBeVisible();

    //2.page.getBytext()--->locates elements based on their exact text content
    //use this locator to find non -interactive elements like headings,div,span
    //for interactive elements like buttons,a,input use getByRole 

    const text:Locator=page.getByText('Welcome to our store');
    await expect(text).toBeVisible();

    //await expect("page.getByText("Welcome to our store").toBeVisible()"); //fullstring
    //await expect("page.getByText("Welcome to ").toBeVisible()"); //subtring
    

    //3.page.getByRole()--->Locating by Role it includes buttons,checkboxes,links,headings,links,lists,tables
    //role=link

    await page.getByRole("link",{name:"Register"}).click();
   await expect(page.getByRole("heading",{name:"Register"})).toBeVisible();

   //4.page.getByLabel()--->locates form elements based on their associated labels
   await page.getByLabel("First name:").fill("John");
    await page.getByLabel("Last name:").fill("Doe");
    await page.getByLabel("Email:").fill("abs@gmail.com");

})
import{test,expect,Locator} from '@playwright/test';
test("xpath demo in playwright",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    //1.Absolute xpath
    const logo:Locator = page.locator('xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]');
    expect(logo).toBeVisible();
    //Relative xpath
    const relativelogo:Locator =page.locator("//img[@alt='Tricentis Demo Web Shop']");
    expect(relativelogo).toBeVisible();
    //3.xpath with contains function
    const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");
    //it returns number of elements which are having computer in href
    const productscount:number=await products.count();
    expect(productscount).toBeGreaterThan(0);

    //textcontent():it works on single content:it extracts the content of the element
    //alltextcontent():it works on multiple content
    // console.log(await products.textContent());//it matching with more than 1 element so it throws strict mode violation error

 console.log("first computer related products:",await products.first().textContent());
 console.log("last computer related products:",await products.last().textContent());
 console.log("nth computer related products:",await products.nth(2).textContent());

 //alltextcontent():it works on multiple content:it extracts the content of all elements nd returns in array format
 let producttitles:string[] =await products.allTextContents();
 
 //we can use for of loop to access matched products
 console.log("all computer related products:");
 for(let pt of producttitles)
 {
    console.log(pt);
 }
 //4.starts-with function
 const buildingproducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
 const count:number=await buildingproducts.count();
 expect(count).toBeGreaterThan(0);

 //5.xpath with text() function:selects element based on text content
 const reglink:Locator = page.locator('xpath=//a[text()="Register"]');
 expect(reglink).toBeVisible();

 //6.xpath with last() function:it selects last element from the matched elements

 const lastitem:Locator=page.locator('xpath=//div[@class="column follow-us"]//li[last()]');
 expect(lastitem).toBeVisible();
 console.log("text content of postional element:",await lastitem.textContent());

//7.xpath with postion() function:it selects element based on postion
const postionitem:Locator=page.locator('xpath=//div[@class="column follow-us"]//li[position()=2]');
 expect(postionitem).toBeVisible();
 console.log("text content of postional element:",await postionitem.textContent());

})
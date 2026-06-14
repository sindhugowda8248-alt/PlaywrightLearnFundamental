import {test,expect} from '@playwright/test';
test("verify xpath axes", async ({page}) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    //self axis=select <td> element that contains "germany"
    const germanyCell = page.locator("//td[text()='Germany']");
    await expect(germanyCell).toHaveText("Germany");
    //parent axis=get parent <tr> element of the <td> contains "germany"
    const parentrow = page.locator("//td[text()='Germany']/parent::tr");
    await expect (parentrow).toContainText("Maria Anders")
    console.log(await parentrow.textContent());
   //child axis=get all<td> children of the 2nd <tr> in table
   const childCells = page.locator("//table[@id='customers']//tr[2]/child::td");
   await expect(childCells).toHaveCount(3); 
   //ancestor axis= get ancestor<table> of the "Germany"
   const ancestorTable = page.locator("//td[text()='Germany']/ancestor::table");
   await expect(ancestorTable).toHaveAttribute("id","customers");
   //descendant axis=get all<td> elements under table
  const descendantCells = page.locator("//table[@id='customers']/descendant::td");
  await expect(descendantCells).toHaveCount(18);
  //following= get the <td> that comes after the <td> comes after 'germany" in document order
  const followingCell = page.locator("//td[text()='Germany']/following::td");
  await expect(followingCell).toHaveText("Centro comercial Moctezuma");
  //following sibilings=get the <td> to right of germany
  const followingsibiling=page.locator("//td[text()='Germany']/following-sibling::td");
  await expect(followingsibiling).toHaveCount(0);
  //preceding axis= get the <td> just before germany
  const precedingCell = page.locator("//td[normalize-space()='Germany']/preceding::td[1]");
  await expect(precedingCell).toHaveText("maria Anders");
  //preceding sibilings=get the <td> to left of germany
  const precedingsibling = page.locator("//td[text()='Germany']/preceding-sibling::td");
  await expect(precedingsibling).toHaveCount(2);
});
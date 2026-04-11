import {test,expect} from '@playwright/test'

test("ParaBank Test case 1",async ({page})=>{

    //1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //2.verify application logo is displayed
    await expect(page.getByTitle('ParaBank')).toBeVisible();
  
    //3.Verify application caption displayed as "Experience the difference"
    await expect(page.locator('//p[contains(text(),"Experience")]')).toHaveText("Experience the difference");

    //4.Enter invalid username
    const username= page.locator('//input[@name="username"]');
    username.clear();
    await username.fill("adminadmin");
    await expect(username).toHaveValue('adminadmin');

    //5.Enter empty Password
    const password= await page.locator('//input[@name="password"]');
    password.clear();
    await password.fill("");
    await expect(password).toHaveValue('');

    //6.Click on login button
    const logInButton = await page.locator('//input[@value="Log In"]');
    await expect(logInButton).toBeVisible();
    await logInButton.click();

    //7.Verify the error message "Please enter a username and password."
    const errorMessage= await page.locator('//p[@class="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Please enter a username and password.');
    
    //8.Click on admin page link
    const adminLink = page.locator('//ul[@class="leftmenu"]//a[@href="admin.htm"]');
    await expect(adminLink).toHaveAttribute('href', 'admin.htm');
    await adminLink.click();
    
    //9.select the option "soap" from dba mode radio button
    const radioButtonforSOAP = page.locator('//table[@class="form"]/child::tbody/child::tr[1]/child::td/input[@value="soap"]');
    await radioButtonforSOAP.check();
    
    //10.Scroll to element dropdown
    await page.locator('//select[@id="loanProvider"]').scrollIntoViewIfNeeded();

    
    //11.Select the option web service from the dropdown
    const loanProviderForDropdown=  await page.locator('//select[@id="loanProvider"]');
    await loanProviderForDropdown.selectOption({label:'Web Service'});

    //12.click on submit button
    const submitButton = await page.locator('//form[@id="adminForm"]//input[@value="Submit"]');
    await expect(submitButton).toBeVisible();
    await submitButton.click();

    //13.verify submission is successful by validating success message
    const successMessage = await page.locator('//p//b[text()="Settings saved successfully."]');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toHaveText("Settings saved successfully.")

    //14.Click on services page link
    const servicesLink = page.locator('//ul[@class="leftmenu"]/child::li[3]//a[@href="services.htm"]');
    await expect(servicesLink).toHaveAttribute('href', 'services.htm');
    await servicesLink.click();
    
    //15.wait for service page
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/services.htm');
   
    //16.Scroll down till bookstore services table
    await page.locator('//div[@id="rightPanel"]//table[2]').scrollIntoViewIfNeeded();

    //17.get total rows of books store services table
    const totalRowsInBookStoreTable = await page.locator('//div[@id="rightPanel"]//table[2]//tbody//tr').count();
    console.log("Total rows in Book Services Table", await totalRowsInBookStoreTable);
    
   //18.get total columns of books store services table
    const totalColsInBookStoreTable = await page.locator('//div[@id="rightPanel"]//table[2]//tbody//tr[1]//td');
    console.log("Total columns in Book Services Table",await totalColsInBookStoreTable.count());
   
    //19.Print Book Store Services table data (row wise and column wise data)
    const bookStoreTable = page.locator('//div[@id="rightPanel"]//table[2]'); //Select Books store service table
    const totalRows = bookStoreTable.locator('tr');//gives all rows in the table
    for (let i = 0; i < totalRowsInBookStoreTable; i++) {
        const row = totalRows.nth(i);
        console.log(`Row ${i} data:` )
        console.log(await row.allInnerTexts());
    }
 
});
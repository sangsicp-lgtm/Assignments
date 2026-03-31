import {test,expect} from '@playwright/test'

test("Para Bank Locators",async ({page})=>{

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    //logo
    await page.locator('img[class="logo"]');

    //header panel buttons
    await page.locator('li[class="home"]>a[href="index.htm"]');
    await page.locator('li[class="aboutus"]>a[href="about.htm"]');
    await page.locator('li[class="contact"]>a[href="contact.htm"]');

    //header panel leftmenu
    await page.locator('//ul[contains(@class,"leftmenu")]//li[contains(text(),"Solutions")]');
    await page.locator('//ul[contains(@class,"leftmenu")]//li//a[contains(text(),"About")]');
    await page.locator('//ul[contains(@class,"leftmenu")]//li//a[contains(text(),"Services")]');
    await page.locator('//ul[contains(@class,"leftmenu")]//li//a[contains(text(),"Products")]');
    await page.locator('//ul[contains(@class,"leftmenu")]//li//a[contains(text(),"Locations")]');
    await page.locator('//ul[contains(@class,"leftmenu")]//li//a[contains(text(),"Admin Page")]');

    //Login form

    await page.locator('//form[@name="login"]//input[@name="username"]');
    await page.locator('//form[@name="login"]//input[@name="password"]');
    await page.locator('//form[@name="login"]//input[@value="Log In"]');
    await page.locator('//a[contains(text(),"Forgot login info?")]');
    await page.locator('//a[contains(text(),"Register")]');

    //Right Panel-Services
    await page.locator('//div[@id="rightPanel"]//a[contains(text(),"Withdraw Funds")]');
    await page.locator('//div[@id="rightPanel"]//ul[@class="services"]//a[contains(text(),"Transfer Funds")]');
    await page.locator('//div[@id="rightPanel"]//ul[@class="services"]//a[contains(text(),"Check Balances")]');
    await page.locator('//div[@id="rightPanel"]//ul[@class="services"]//a[contains(text(),"Make Deposits")]');

    //Right Panel Services Two
    await page.locator('//div[@id="rightPanel"]//ul[@class="servicestwo"]//a[contains(text(),"Bill Pay")]');
    await page.locator('//div[@id="rightPanel"]//ul[@class="servicestwo"]//a[contains(text(),"Account History")]');
    await page.locator('//div[@id="rightPanel"]//ul[@class="servicestwo"]//a[contains(text(),"Transfer Funds")]');

    //events list
    await page.locator('//div[@id="rightPanel"]//a[@href="services.htm"]');
    await page.locator('//a[contains(text(),"ParaBank Is Now Re-Opened")]');
    await page.locator('//a[contains(text(),"New! Online Bill Pay")]');
    await page.locator('//a[contains(text(),"New! Online Account Transfers")]');
    await page.locator('//div[@id="rightPanel"]//a[@href="news.htm"]');

    //footer panel
    await page.locator('//div[@id="footerPanel"]//a[@href="index.htm"]');
    await page.locator('//div[@id="footerPanel"]//a[@href="about.htm"]');
    await page.locator('//div[@id="footerPanel"]//a[@href="services.htm"]');
    await page.locator('//div[@id="footerPanel"]//a[contains(text(),"Products")]');
    await page.locator('//div[@id="footerPanel"]//a[contains(text(),"Locations")]');
    await page.locator('//div[@id="footerPanel"]//a[contains(text(),"Forum")]');
    await page.locator('//div[@id="footerPanel"]//a[contains(text(),"Site Map")]');
    await page.locator('//div[@id="footerPanel"]//a[contains(text(),"Contact Us")]');
    await page.locator('//div[@id="footerPanel"]//ul[@class="visit"]//a[contains(text(),"www.parasoft.com")]');



});
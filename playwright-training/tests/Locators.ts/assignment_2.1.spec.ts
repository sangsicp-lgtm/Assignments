import {test,expect} from '@playwright/test'

test("Demo qa Web Actions",async ({page})=>{

    //1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto("https://demoqa.com/automation-practice-form");

    //2. Wait for Page-load
    const practiceFormHeader =  page.locator("h1.text-center");
    await expect(practiceFormHeader).toBeVisible();

    //3. Enter First name and Last name
    const firstName = page.locator("input#firstName");
    await firstName.clear();
    await firstName.fill("Utsab");
    
    const lastName= page.locator("//input[@id='lastName']");
    await lastName.clear();
    await lastName.fill("Das");
    console.log("First and Last Name is entered");

    //4. Enter Email
    const email= await page.locator("//input[@id='userEmail']");
    await email.clear();
    await email.fill("exaample@.com");
    console.log("Email is entered");

    //5. Select Gender (Male)
    await selectGender(page,"Male");

    //6. Enter mobile number
    const mobileNo= await page.locator("//input[@id='userNumber']");
    await mobileNo.clear();
    await mobileNo.fill("1234567890");
    console.log("Mobile no is entered");

    //7.Select DOB (1-Feb-1991)
    const dob= await page.locator('//input[@id="dateOfBirthInput"]');
    //await dob.clear();
    await dob.fill("09 Jan 2000");
    console.log("Dob is entered");




    // 8.Search and Select Computer Science and English
    // 9.Select Hobbies as Sports and Reading
    // 10.Upload photo
    // 11.Submit Details 

    async function selectGender(page :any,genderValue:string )
    {

        const selectGender= page.locator(`//input[@value="${genderValue}"]`);
        await selectGender.click();
        console.log(`Gender ${genderValue} is selected from the Gender radio button`);

    }

})
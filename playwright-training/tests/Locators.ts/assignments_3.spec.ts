	import {test,expect} from '@playwright/test'
    test("Demo qa Frames",async ({page})=>{


        //1. Enter URL and Launch the application (https://demoqa.com/frames)
         await page.goto("https://demoqa.com/frames");

        // 2. Locate Main window element
        const mainWindowElement=await page.locator('h1.text-center');

        // Locate the frame and store in the variable
        const iframe= await page.frameLocator("iframe#frame1");

                // 3. Locate Frame Element
        const frameElement = iframe.locator('h1#sampleHeading');

        // 4. Copy and Print text from frame element
        console.log(await frameElement.textContent());

        // 5. Copy and Print text from main window element
        console.log(await mainWindowElement.textContent());

});




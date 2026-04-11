import {test,expect} from '@playwright/test'
test("Demo qa Alerts",async ({page})=>{

    // 1. Enter URL and Launch the application (https://demoqa.com/alerts)
    await page.goto("https://demoqa.com/alerts");

    // 2. Locate Alert buttons to trigger the alerts
    const infoAlertButton =page.locator('button#alertButton');
    const timerAlertButton =  page.locator('button#timerAlertButton');
    const confirmationAlertButton=page.locator('button#confirmButton');
    const promptAlertButton= page.locator('button#promtButton');

    page.once("dialog",async dialog =>{

        
            //copy the alert message
            console.log(dialog.message());

            //select OK button
            dialog.accept();
    
    });

        // 3. Click on the information alert 
          await infoAlertButton.click();

          //wait for 2 sec
          await page.waitForTimeout(2000);

    page.once("dialog",async dialog =>{

        
            //copy the alert message
            console.log(dialog.message());

            //select cancel button
            dialog.dismiss();

    
    });

        // 4. Click on the Confirmation alert
        await confirmationAlertButton.click();
        
        //wait for 2 sec
        await page.waitForTimeout(2000);

        page.once("dialog",async dialog =>{

            
                //copy the alert message
                console.log(dialog.message());

                //select OK button
                dialog.accept("Sangee");
                
        
        });


        //5 Click on the Prompt alert
        await promptAlertButton.click();
        
        //wait for 2 sec
        await page.waitForTimeout(2000);
    
})

	

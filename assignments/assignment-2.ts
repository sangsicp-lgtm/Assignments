//Assignment 2 in Conditional Statements:
//Done by Sangeetha C.P on 10/3/2026

/* A bank evaluates loan applicants based on the following criteria:
1. Credit Score:
    o If the credit score is above 750, the loan is automatically approved.
    o If the credit score is between 650 and 750, additional checks are performed.
    o If the credit score is below 650, the loan is denied. 
2. Income:
    o For credit scores between 650 and 750, the customer’s income must be at least $50,000
    for the loan to be considered.

3. Employment Status:
    o If the customer’s income is at least 50,000, the system checks whether the customer is
    employed.
    o If the customer is unemployed, the loan is denied.
4. Debt-to-Income Ratio:
    o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
    o If the DTI ratio is less than 40%, the loan is approved.
    o If the DTI ratio is 40% or greater, the loan is denied.*/
    
    interface customerInfo{
        customerName :string,
        creditScore:number,
        income :number,
        isEmployed :boolean,
        debtToIncomeRatio :number
    }
    //Customer Info
    let customer:customerInfo={
        customerName :"John Doe",
        creditScore :720,
        income :55000.0,
        isEmployed :true,
        debtToIncomeRatio :39.0
    }
    //Initially Customer Eligiblity is set to Zero
    let customerEligibleForLoan: boolean= false;

    
    customerEligibleForLoan=isCustomerEligibleForLoan();
    console.log("Customer is Elligible to Take Loan "+ customerEligibleForLoan);
    
    //chechking the loan Eligibility Function
    function isCustomerEligibleForLoan(): boolean{
        switch (true)
        {
            case (customer.creditScore>=750):
                console.log("Customer is elligible for taking Loan due to his high Credit Score!!!!");
                customerEligibleForLoan= true;
                break;

            case (customer.creditScore>=650 && customer.creditScore<=750):
                if (customer.income>=50000 && customer.isEmployed==true && customer.debtToIncomeRatio<40)
                {
                    console.log("Customer is elligible for taking Loan!!!!");
                    customerEligibleForLoan= true;
                }
                else
                {
                    console.log("Loan is denied due to the Customer Income/Employement/DTI ratio didnt meet Bank expectation");
                    customerEligibleForLoan= false;
                }
                break;

            case (customer.creditScore<650 ):
                console.log("Loan is denied due to lower Credit score");
                customerEligibleForLoan= false;
                break;
        }
        return customerEligibleForLoan;
    }

  
//Assignment -4 (Conditional Statements & Loops)
//Done by Sangeetha C.P on 11/3/2026

/* Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */

let transactions :number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
let countOfTransaction:number =0;
let totalAmtCredited:number = 0;
let totalAmtDebited:number=0;
let balanceAmount:number=0;
let noOfSuspiciousTransaction: number=0;

for(let transaction of transactions)
{
    balanceAmount += transaction;
    if(transaction>0)
    {
        totalAmtCredited += transaction;
    }
    else
    {
        totalAmtDebited += transaction;
    }
    if(transaction>=10000 || transaction<=-10000)
    {
        console.log("Suspicious credit/ debit Transaction with Amount:" + transaction);
        noOfSuspiciousTransaction=noOfSuspiciousTransaction+1;
    }
    countOfTransaction++;
}
//1. Print total number of credit and debit transactions completed
console.log("1.Total number of credit and debit transactions completed: " + countOfTransaction);

//2. Print the total amount credited and debited in account
console.log("2.Total amount credited: "+ totalAmtCredited + "\n"+"Total amount Debited in account: " + totalAmtDebited);

//3. Print total amount remaining at the end in Bank Account
console.log("3.Total amount remaining at the end in Bank Account:" + balanceAmount);

//4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
//Transaction with Amount” and also print total number of suspicious transactions */
console.log("4.Total number of Suspicious Transactions:" + noOfSuspiciousTransaction);

 let prices: number[] = [1,6,18, 5, 3, 6, 7];
//let prices: number[] = [7, 6, 4, 3, 1];
let maxxProfit: number = 0;
let curProfit:number=0;
let buyDay:number=0;
let sellDay:number=0;

for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i+1; j < prices.length; j++) {

       
        curProfit=prices[j]-prices[i];
        
        if(curProfit>maxxProfit)
        {
            maxxProfit=curProfit;
            buyDay=i+1;
            sellDay=j+1;
        }

    }
}
if(maxxProfit>0)
{
    console.log("BuyDay is: "+ buyDay,"SellDay is: "+sellDay); 
    console.log("Profit made on this Stock is:", maxxProfit); 
}
else{
        console.log("There is no Profit made on this Stock :", maxxProfit); 
}

//est Time to Buy and Sell Stock



let prices: number[] = [7, 1, 5, 3, 6, 4];
console.log("Prices of the stock are:", prices);
let buyStock = prices[0];
let sellStock: number = 0;
let profit: number = 0;

function maxProfit(prices: number[]): number {
    if (prices[prices.length - 1] <= 1) {
        return profit;
    }
    else {
        
        for (let i: number = 0; i < prices.length - 1; i++) {

            if (prices[i] < buyStock) {
                buyStock = prices[i];
            }
        }
     
        for (let i: number = 0; i < prices.length - 1; i++) {

            if (prices[i] > buyStock) {
                sellStock = prices[i];
            }
        }
        return profit=sellStock-buyStock;
  
    }
   
}


console.log("Profit made on this Stock is:", maxProfit(prices));

// double for
var maxProfit = function(prices) {
  if (prices.length === 0) return 0
  
  let profit = -1;
  
  for (let i = 0; i < prices.length; i++) {
    const buy = prices[i]
    for (let j = i; j < prices.length; j++) {
      const sell = prices[j]
      if ((sell - buy) > profit) profit = (sell - buy) 
    }
  }
  
  return profit
};

// single for
var maxProfit = function(prices) {
  if (prices.length === 0 || prices.length === 1) return 0
  
  let profit = 0, buy = prices[0]
  
  for (let sell of prices) {
    if (buy < sell) profit = Math.max(profit, sell - buy)
    else buy = sell
  }
  
  return profit
};
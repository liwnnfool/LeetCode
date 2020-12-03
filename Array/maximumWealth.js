var maximumWealth = function(accounts) {
  let richest = -1;
  accounts.forEach(account => {
    const wealth = account.reduce((acc, cur) => acc += cur);
    if (wealth > richest) richest = wealth;
  });
  
  return richest;
};
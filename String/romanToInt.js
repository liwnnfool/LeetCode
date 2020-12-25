var romanToInt = function(s) {
  const dict = {
   I: 1,     
   V: 5,
   X: 10,
   L: 50,
   C: 100,
   D: 500,
   M: 1000
 }
  let sum = 0
  
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] < dict[s[i + 1]])
      sum -= dict[s[i]]
    else
      sum += dict[s[i]]
  }
  
  return sum
};


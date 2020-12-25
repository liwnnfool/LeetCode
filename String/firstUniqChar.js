var firstUniqChar = function(s) {
  if (s.length === 0) return -1
  
  for (let char of s) {
    const indexOfFirst = s.indexOf(char)
    const repeat = s.indexOf(char, indexOfFirst + 1)
    
    if (repeat === -1) return indexOfFirst
  }
  
  return -1
};
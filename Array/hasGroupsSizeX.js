var hasGroupsSizeX = function(deck) {
  const partition = new Map();
 
   if (deck.length < 2) return false;
 
   for (let i = 0; i < deck.length; i++) {
     if (!partition.has(deck[i])) partition.set(deck[i], 1);
     else partition.set(deck[i], partition.get(deck[i]) + 1);
   }
 
   // console.log(Math.max(...[...partition.values()]));
   const counts = [...partition.values()];
   const maxCount = Math.max(...counts);
 
   for (let i = 2; i <= maxCount; i++) {
     if (counts.every(count => count % i === 0)) return true; 
   }
 
   return false;
 };
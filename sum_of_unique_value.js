const input = [1, 3, 1, 3, 5, 7, 5, 4];
const mergeDuplicates = arr => {
   const map = arr.reduce((acc, val) => {
      if(acc.has(val)){
         acc.set(val, acc.get(val) + 1);
      }else{
         acc.set(val, 1);
      };
      return acc;
   }, new Map());
   return Array.from(map, el => el[0] * el[1]);
};
console.log(mergeDuplicates(input));
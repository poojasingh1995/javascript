const arr = [1, 2, 3, 4, 5, 6];
const num = 4;
const divisibleSumPairs = (arr = [], num) => {
   const res = [];
   const { length } = arr;
   for(let i = 0; i < length; i++){
      for(let j = i + 1; j < length; j++){
         const sum = arr[i] + arr[j];
         if(sum % num === 0){
            res.push([arr[i], arr[j]]);
         }
      }
   }
   return res;
};
console.log(divisibleSumPairs(arr, num));
const str = 'schooeal';
const findLongestVowel = (str = '') => {
   let cur = 0
   let max = 0
   for (let i = 0; i < str.length; ++i) {
      if ("aeiou".includes(str[i])) {
         cur++
         if (cur > max) {
            max = cur
         }
      } else {
         cur = 0
      }
   }
   return max
};
console.log(findLongestVowel(str))
// You get an array of numbers, return the sum of all of the positive ones.

/* 
P: arr of nums
R: sum of all positive ints or 0
E: [1,-4,7,12] => 1 + 7 + 12 = 20
   [1,-1,2,1] => 1 + 2 + 1 = 4
   [] => 0
P: 
using reduce method, loop thru arr of nums
if current val is greater than 0 return acc + current
else return 0
*/

const positiveSum = (arr) => arr.reduce((a, b) => (b > 0 ? a + b : a), 0);

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

/* 
P: arr of ints
R: sum of ints or 0 if empty arr
E: 
[1, 5.2, 4, 0, -1] => 9.2
[] => 0
[-2.398] => -2.398
P:
reduce arr to a sum
return the sum
*/

function sum(numbers) {
  "use strict";
  return numbers.reduce((sum, num) => sum + num, 0);
}

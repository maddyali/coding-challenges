// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

/* 
P: arr that's never empty
R: every other item in arr
E: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
P: filter array for every element whose index is divisible by two
*/
const removeEveryOther = (arr) =>
  arr.filter((element, index) => index % 2 === 0);

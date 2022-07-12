// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

/* 
P: two strs
R: true if first str ends with second arg
E:
solution('abc','bc') -> true
solution('abc','d') -> false
solution('abcdef','ef') -> true

P: 
check if str ends with ending str
use endsWith method
*/

// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// Refactor
const solution = (str, ending) => str.endsWith(ending);
let anotherSolution = (str, ending) =>
  str.substr(str.length - ending.length, ending.length) === ending;

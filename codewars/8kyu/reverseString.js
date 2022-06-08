// Complete the solution so that it reverses the string passed into it.

/* 
P: string
R: return reveresed string
E: 'world'  =>  'dlrow'
   'word'   =>  'drow'
   'hello'  => 'olleh'
P: split string into arr
   reverse arr
   join the arr
   return arr
*/

function solution(str) {
  return str.split("").reverse().join("");
}

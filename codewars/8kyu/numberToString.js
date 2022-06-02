// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"

/* 
P: always given an int? any special chars?
R: returns a string
E: 456 --> "456"
   789 --> "789"
   000 --> "000"
P: make function that takes in ints
   convert using toString method
   return string 
*/

function numberToString(num) {
  return num.toString();
}

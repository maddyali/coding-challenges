// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

/* 
P: str
R: case-sensitive str with each char doubled 
E: "String" => "SSttrriinngg"
   "Hello World" => "HHeelllloo  WWoorrlldd"
   "1234!_ " => "11223344!!__  "
P: take in str
    convert to arr
    transform arr by reducing to a single str where each char is doubled
    return str
*/

function doubleChar(str) {
  return Array.from(str).reduce(
    (result, char) => result.concat(char + char),
    ""
  );
}

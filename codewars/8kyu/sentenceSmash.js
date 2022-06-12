// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

/* 
P: arr of strs
R: str
E: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
   ['hello', 'my', 'name', 'is', 'maddy']  =>  'hello my name is maddy'
   ['the', 'sentence', 'smash', 'function']  =>  'the sentence smash function'
P: convert arr to str
   join elements with a space in between
   return str
*/

function smash(words) {
  return words.join(" ");
}

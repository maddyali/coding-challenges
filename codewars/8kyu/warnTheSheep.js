// Warn the sheep in front of the wolf that it's about to be eaten.
// You are standing at the front of the queue which is at the end of the array.

/*
P: reversed arr of strings: 'sheep' and exactly one 'wolf'
R: string
E: Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
  Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
  
  Input: ["sheep", "sheep", "wolf"]
  Output: "Pls go away and stop eating my sheep"
 P: 
 create a var to hold the position of 'wolf'
 reverse the arr then find the index of 'wolf' store as position
 if the wolf's position is index 0 then return 'pls go away..'
 else return 'oi! sheep number n..' where n is the index number of the wolf
  */

function warnTheSheep(queue) {
  let position = queue.reverse().indexOf("wolf");
  return position === 0
    ? `Pls go away and stop eating my sheep`
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

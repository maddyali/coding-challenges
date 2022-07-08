// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

/* 
P: two ints representing bullets and dragons
R: true/false depending on if their enough bullets to slay dragons
E:
10, 5 -> true
7, 4 -> false
4, 5 -> false
P: each dragon requires 2 bullets to be slayed
if dragons * 2 is less than or equal to bullets return true
else return false
*/

// function hero(bullets, dragons) {
//   return dragons * 2 <= bullets ? true : false;
// }

const hero = (bullets, dragons) => dragons * 2 <= bullets;

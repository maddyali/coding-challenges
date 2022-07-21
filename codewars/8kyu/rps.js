// Let's play! You have to return which player won! In case of a draw return Draw!.
/* 
P: two strings
R: string indicating which player won, in case of draw return draw
E:
"scissors", "paper" -> "player 1 won!"
"scissors", "rock" -> "player 2 won!"
"paper", "paper" -> "Draw"

P: if p1 and p2 picked same choice return "Draw!"
rules of the game: rock > scissors, paper > rock, scissors > paper
if p1 choice is greater than p2 choice, p1 wins,
else p2 wins
*/

if (p1 === p2) {
  return "Draw!";
}

const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

if (rules[p1] === p2) {
  return "Player 1 won!";
} else return "Player 2 won!";

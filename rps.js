/*
assign value for rock

assign value for paper

assign value for scissors

ask user what they choose

make computuer pick random 

check which value is greater
*/

let rock = "rock";

let paper = "paper";

let scissors = "scissors";


//asks whats you choose
let your_choice_string = prompt("pick now!", "rock");



//computer picks random choice
let choice = [rock, paper, scissors];
let computuer_choice_length = choice.length;
let randomNumber = Math.random();
randomNumber = randomNumber * computuer_choice_length;
randomNumber = Math.floor(randomNumber);
let computuer_choice_pick = choice[randomNumber];

alert("NPC picks " + computuer_choice_pick);

//checks if you are computer won
if (your_choice_string === "rock" && computuer_choice_pick === rock) {
    alert("draw");
} else if (your_choice_string === "paper" && computuer_choice_pick === paper) {
    alert("draw");
} else if (your_choice_string === "scissors" && computuer_choice_pick === scissors) {
    alert("draw");
}  else if (your_choice_string === "rock" && computuer_choice_pick === paper) {
    alert("you lose");
} else if (your_choice_string === "rock" && computuer_choice_pick === scissors) {
    alert("you win");
} else if (your_choice_string === "paper" && computuer_choice_pick === rock) {
    alert("you win");
} else if (your_choice_string === "paper" && computuer_choice_pick === scissors) {
    alert("you lose");
} else if (your_choice_string === "scissors" && computuer_choice_pick === rock) {
    alert("you lose");
} else if (your_choice_string === "scissors" && computuer_choice_pick === paper) {
    alert("you lose");
}
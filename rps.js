/*
assign value for rock

assign value for paper

assign value for scissors

ask user what they choose

make computuer pick random 

check which value is greater
*/


//computer picks random choice
/*    if (your_choice_string === "rock" && computuer_choice_pick === "rock") {
        alert("draw");
    } else if (your_choice_string === "paper" && computuer_choice_pick === "paper") {
        alert("draw");
    } else if (your_choice_string === "scissors" && computuer_choice_pick === "scissors") {
        alert("draw");
    }  else if (your_choice_string === "rock" && computuer_choice_pick === "paper") {
        alert("you lose");
    } else if (your_choice_string === "rock" && computuer_choice_pick === "scissors") {
        alert("you win");
    } else if (your_choice_string === "paper" && computuer_choice_pick === "rock") {
        alert("you win");
    } else if (your_choice_string === "paper" && computuer_choice_pick === "scissors") {
        alert("you lose");
    } else if (your_choice_string === "scissors" && computuer_choice_pick === "rock") {
        alert("you lose");
    } else if (your_choice_string === "scissors" && computuer_choice_pick === "paper") {
        alert("you lose");
    }


let choice = ["rock", "paper", "scissors"];
let computuer_choice_length = choice.length;
let randomNumber = Math.random();
randomNumber = randomNumber * computuer_choice_length;
randomNumber = Math.floor(randomNumber);
let computuer_choice_pick = choice[randomNumber];
*/

let your_choice_string = '';
function rock() {
    your_choice_string = "rock";
    console.log(your_choice_string);

    let choice = ["rock", "paper", "scissors"];
    let computuer_choice_length = choice.length;
    let randomNumber = Math.random();
    randomNumber = randomNumber * computuer_choice_length;
    randomNumber = Math.floor(randomNumber);
    let computuer_choice_pick = choice[randomNumber];

    if (computuer_choice_pick === "rock") {
        alert("draw");
    } else if ( computuer_choice_pick === "paper") {
        alert("you lose");
    } else if (computuer_choice_pick === "scissors") {
        alert("you win");
    }

}
function paper() {

    your_choice_string = "paper";
    console.log(your_choice_string);

    let choice = ["rock", "paper", "scissors"];
    let computuer_choice_length = choice.length;
    let randomNumber = Math.random();
    randomNumber = randomNumber * computuer_choice_length;
    randomNumber = Math.floor(randomNumber);
    let computuer_choice_pick = choice[randomNumber];

    if (your_choice_string === "paper" && computuer_choice_pick === "paper") {
        alert("draw");
    } else if (your_choice_string === "paper" && computuer_choice_pick === "rock") {
        alert("you win");
    } else if (your_choice_string === "paper" && computuer_choice_pick === "scissors") {
        alert("you lose");
    }
}
function scissors() {
    your_choice_string = "scissors";
    console.log(your_choice_string);

    let choice = ["rock", "paper", "scissors"];
    let computuer_choice_length = choice.length;
    let randomNumber = Math.random();
    randomNumber = randomNumber * computuer_choice_length;
    randomNumber = Math.floor(randomNumber);
    let computuer_choice_pick = choice[randomNumber];

    if (computuer_choice_pick === "scissors") {
        alert("draw");
    }  else if (computuer_choice_pick === "rock") {
        alert("you lose");
    } else if (computuer_choice_pick === "paper") {
        alert("you win");
    }
}

//checks if you are computer won

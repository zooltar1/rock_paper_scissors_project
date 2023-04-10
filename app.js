// #Rock Paper Scissors Game#

// create function called 'getComputerChoice' that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

function getComputerChoice () {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random(1)* 3);
    return computerChoice[randomChoice];
}

// create variable with computer choice

let computerChoice = getComputerChoice();

// create variable to store user input, make it case insensitive

console.log('Let\'s play a game Rock Paper and Scissors. What\'s Your choice?');

let playerChoice = prompt('Type: Rock, Paper or Scissors', ' ').toLowerCase();

// create function 'playRound' that plays a single round of Rock Paper Scissors, return result that declares the winner of the round like so: "You Lose! Paper beats Rock"

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
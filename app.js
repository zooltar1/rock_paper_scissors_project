// #ROCK PAPER SCISSORS GAME#

// global variables

let gameChoices = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;

// function that returns random number based on array length

function getComputerChoice () {
    let randomChoice = Math.floor(Math.random(1)* gameChoices.length);
    return parseInt(randomChoice);
}

// asign random choice from game choices to computerChoice variable

computerChoice = gameChoices[getComputerChoice()];

// asign user input to playerChoice variable, made it case insensitive

playerChoice = prompt('Type: Rock, Paper or Scissors').toLowerCase();

// main function that checks who wins

function playRound (computerChoice, playerChoice) {
    
    let message;

    if (computerChoice == playerChoice) {
        message = `Tie!`;
    } 
    else if (computerChoice === 'rock' && playerChoice === 'scissors' || computerChoice === 'paper' && playerChoice === 'rock' || computerChoice === 'scissors' && playerChoice === 'paper') {
        message = `You lost. ${computerChoice} beats ${playerChoice}!`;
    }
    else if (computerChoice === 'rock' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'scissors' || computerChoice === 'scissors' && playerChoice === 'rock') {
        message = `You win ! ${playerChoice} beats ${computerChoice}!`;
    }
    console.log(message);
}

playRound(computerChoice, playerChoice);
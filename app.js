// #ROCK PAPER SCISSORS GAME#

// global variables

let gameChoices = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;
let playerWin = 0;
let computerWin = 0;

// function that returns random number based on array length

function getComputerChoice () {
    let randomChoice = Math.floor(Math.random(1)* gameChoices.length);
    return parseInt(randomChoice);
}

// function that checks who wins

function playRound (computerChoice, playerChoice) {
    
    let message;

    computerChoice = gameChoices[getComputerChoice()];
    playerChoice = prompt('Welcome to Rock, Paper, Scissors Game! Type: Rock, Paper or Scissors').toLowerCase();

    if (computerChoice == playerChoice) {
        message = `Tie!`;
    } 
    else if (computerChoice === 'rock' && playerChoice === 'scissors' || computerChoice === 'paper' && playerChoice === 'rock' || computerChoice === 'scissors' && playerChoice === 'paper') {
        computerWin += 1;
        message = `You lost. ${computerChoice} beats ${playerChoice}!`;
    }
    else if (computerChoice === 'rock' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'scissors' || computerChoice === 'scissors' && playerChoice === 'rock') {
        playerWin += 1;
        message = `You win ! ${playerChoice} beats ${computerChoice}!`;
    }
    console.log('Player win counter: ' + playerWin);
    console.log('Computer win counter: ' + computerWin);
    console.log(message);
}

// function called game() to play a 5 round game that keeps score and reports a winner or loser at the end

function game() {
    let gameCounter = 5;

    for (let i = 0; i < gameCounter; i++) {
        playRound(computerChoice, playerChoice);
    }
}

game();

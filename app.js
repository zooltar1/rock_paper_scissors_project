// #ROCK PAPER SCISSORS GAME#

// global variables

let gameChoices = ['rock', 'paper', 'scissors'];
let gameCounter = 5;
let playerWin = 0;
let computerWin = 0;
let computerChoice;
let playerChoice;
let roundWinMessage;
let gameWinMessage;

console.log(gameCounter);

// function that returns random number based on array length

function getRandomChoice() {
    let randomChoice = Math.floor(Math.random(1)* gameChoices.length);
    return parseInt(randomChoice);
}

// function that checks who wins

function playRound(computerChoice, playerChoice) {

    computerChoice = gameChoices[getRandomChoice()];
    playerChoice = prompt('Welcome to Rock, Paper, Scissors Game! Type: Rock, Paper or Scissors').toLowerCase();

    if (computerChoice == playerChoice) {
        roundWinMessage = `Tie!`;
    } 
    else if (computerChoice === 'rock' && playerChoice === 'scissors' || computerChoice === 'paper' && playerChoice === 'rock' || computerChoice === 'scissors' && playerChoice === 'paper') {
        computerWin += 1;
        roundWinMessage = `You lost. ${computerChoice} beats ${playerChoice}!`;
    }
    else if (computerChoice === 'rock' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'scissors' || computerChoice === 'scissors' && playerChoice === 'rock') {
        playerWin += 1;
        roundWinMessage = `You win ! ${playerChoice} beats ${computerChoice}!`;
    }
    console.log('Player win counter: ' + playerWin);
    console.log('Computer win counter: ' + computerWin);
    console.log(roundWinMessage);
}

// function based on gameCounter variable trigger playRound function

function game(counter) {

    for (let i = 0; i < counter; i++) {
        playRound(computerChoice, playerChoice);
    }
    
    if (playerWin > computerWin) {
        gameWinMessage = `Congrats, You win the game!`;
    }
    else if (playerWin < computerWin) {
        gameWinMessage = `You lost the game, try again!`
    }
    else {
        gameWinMessage = `We have a draw!`;
    }

    console.log(gameWinMessage);

}

// start of the game

game(gameCounter);

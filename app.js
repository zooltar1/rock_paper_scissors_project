// #ROCK PAPER SCISSORS GAME#

// global variables

let gameChoices = ['rock', 'paper', 'scissors'];
let gameCounter = 5;
let playerWin = 0;
let computerWin = 0;
let computerChoice;
let playerChoice;
let playerCounter;
let computerCounter;
let gameWinMessage;
let score;

// function that returns random number based on array length

function getRandomChoice() {
    let randomChoice = Math.floor(Math.random(1)* gameChoices.length);
    return parseInt(randomChoice);
}

// function that checks who wins

function playRound(computerChoice, playerChoice) {

    let roundWinMessage;
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
    
    playerCounter = 'Player win counter: ' + playerWin;
    computerCounter = 'Computer win counter: ' + computerWin;
    
    return roundWinMessage

}

// function based on gameCounter variable trigger playRound function

function game(counter) {

    for (let i = 0; i < counter; i++) {
        console.log('Games left: ' + gameCounter);
        score = playRound(computerChoice, playerChoice);
        gameCounter -= 1;
        console.log(score);
        console.log(playerCounter);
        console.log(computerCounter);
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

// #ROCK PAPER SCISSORS GAME#

// global variables

const gameChoices = ['rock', 'paper', 'scissors'];
let computerChoice;
let gameCounter = 5;
let playerScore = 0;
let computerScore = 0;
let gamePlayMessage = '';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const result = document.getElementById('result');
const counter = document.getElementById('counter');
const scores = document.getElementById('scores');

rock.addEventListener("click", function(){
    game('rock');
});
paper.addEventListener("click", function(){
    game('paper');
});
scissors.addEventListener("click", function(){
    game('scissors');
});

// function that returns random number based on array length

function getRandomChoice() {
    let randomChoice = Math.floor(Math.random(1)* gameChoices.length);
    return parseInt(randomChoice);
}

// function that check win/lose based on player argument

function checkWhoWin(playerChoice) {
    computerChoice = gameChoices[getRandomChoice()];

    if (playerChoice == computerChoice) {
        return 'tie'
    } else if (playerChoice == 'rock' && computerChoice == 'scissors' || playerChoice == 'paper' && computerChoice == 'rock' || playerChoice == 'scissors' && computerChoice == 'paper') {
        return 'win'
    } else {
        return 'loose'
    }
}

function playerWin(result) {
    playerScore += result;
    return playerScore
}

function computerWin(result) {
    computerScore += result;
    return computerScore
}

function gamePlayed(times) {
    gameCounter -= times;
    counter.innerText = `Games left: ${gameCounter}.`;
    return gameCounter   
}

function gameResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        result.innerText = `Congratulations, You win the game!`;
    }
    else if (playerScore < computerScore) {
        result.innerText = `You lost the game, try again!`
    }
    else {
        result.innerText = `It\'s a tie! Try again`;
    }
}

function game(playerChoice) {
    if (gameCounter > 0) {
        gamePlayed(1);
        let gameResult = checkWhoWin(playerChoice);
        if (gameResult == 'win') {
            playerWin(1);
            result.innerText = `You win!, ${playerChoice} beats ${computerChoice}`;
        }
        else if(gameResult == 'loose') {
            computerWin(1);
            result.innerText = `You loose!, ${computerChoice} beats ${playerChoice}`;
        }
        else {
            result.innerText = `It\'s a Tie! You have ${playerChoice},and I have ${computerChoice}`;
        }
        scores.innerText = `Player score: ${playerScore}, Computer score: ${computerScore}.`
    }
    else {
        gameResult(playerScore, computerScore);
    }
}

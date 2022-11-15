function getComputerChoice() {
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'ROCK') {
            let result = "It's a tie! Rock doesn't beat Rock";
        }
        else if (computerSelection === 'PAPER') {
            let result = "You lose! Paper beats Rock";
        }
        else if (computerSelection === 'SCISSORS') {
            let result = "You win! Rock beats Scissors";
        }
    }
    if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            let result = "You win! Paper beats Rock";
        }
        else if (computerSelection === 'PAPER') {
            let result = "It's a tie! Paper doesn't beat Paper";
        }
        else if (computerSelection === 'SCISSORS') {
            let result = "You lose! Scissors beats Paper";
        }
    }
    if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            let result = "You lose! Rock beats Scissors";
        }
        else if (computerSelection === 'PAPER') {
            let result = "You win! Scissors beats Paper";
        }
        else if (computerSelection === 'SCISSORS') {
            let result = "It's a tie! Scissors doesn't beat Scissors";
        }
    }
    return result;
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
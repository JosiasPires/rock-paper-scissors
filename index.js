function getComputerChoice() {
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            result = "You lose! Paper beats Rock";
        }
        else if (computerSelection === 'SCISSORS') {
            result = "You win! Rock beats Scissors";
        }
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            result = "You win! Paper beats Rock";
        }
        else if (computerSelection === 'SCISSORS') {
            result = "You lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            result = "You lose! Rock beats Scissors";
        }
        else if (computerSelection === 'PAPER') {
            result = "You win! Scissors beats Paper";
        }
    }
    return result
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result
        let playerSelection = prompt('Choose [Rock, Paper, Scissors]');
        playerSelection = playerSelection.toUpperCase();
        let computerSelection = getComputerChoice();
        let roundWinner = playRound(playerSelection, computerSelection)
        console.log(roundWinner)
        if (roundWinner.includes('You win!')) {
            playerScore += 1;
        }
        else if (roundWinner.includes('You lose!')) {
            computerScore += 1;
        }
    }
    if (playerScore > computerScore) {
        console.log('You won!');
    }
    else if (playerScore === computerScore) {
        console.log("It's a tie!");
    }
    else {
        console.log('You lost!');
    }
    console.log(`Player points: ${playerScore}`);
    console.log(`Computer points: ${computerScore}`);
}
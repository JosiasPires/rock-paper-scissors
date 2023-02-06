function getComputerChoice() {
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            return "You lose! Paper beats Rock";
        }
        else if (computerSelection === 'SCISSORS') {
            return "You win! Rock beats Scissors";
        }
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            return "You win! Paper beats Rock";
        }
        else if (computerSelection === 'SCISSORS') {
            return "You lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return "You lose! Rock beats Scissors";
        }
        else if (computerSelection === 'PAPER') {
            return "You win! Scissors beats Paper";
        }
    }
}

result = document.querySelector('.result');
let i = 0;
let buttons = Array.from(document.querySelectorAll('.button'));
let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.dataset.option;
        let computerSelection = getComputerChoice();
        let roundWinner = playRound(playerSelection, computerSelection);
        result.textContent = roundWinner;
        playRound(playerSelection, computerSelection);
        if (roundWinner.includes('You win!')) {
            playerScore += 1;
        }
        else if (roundWinner.includes('You lose!')) {
            computerScore += 1;
        }
        if (playerScore === 5) {
            result.textContent = 'You won the game!';
            playerScore = 0;
            computerScore = 0;

        }
        if (computerScore === 5) {
            result.textContent = 'You lost the game!';
            playerScore = 0;
            computerScore = 0;
        }
        document.querySelector('.playerScore').textContent = `Player Score: ${playerScore}`;
        document.querySelector('.computerScore').textContent = `Computer Score: ${computerScore}`;
    });
})
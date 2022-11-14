function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors']
    const computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
}
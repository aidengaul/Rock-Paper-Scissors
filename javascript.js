function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) 
        return "rock";
    else if (num === 2)
        return "paper";
    else
        return "scissors";
}

function playRound(computerSelection, playerSelection) {
    const lowerCase = playerSelection.toLowerCase();

    if (computerSelection === lowerCase)
        return "Tie!"

    if (computerSelection === "rock" && lowerCase === "scissors" || computerSelection === "paper" && lowerCase === "rock" || computerSelection === "scissors" && lowerCase === "paper")
        return "You Lose!";
    else
        return "You Win!";
}

const computerSelection = getComputerChoice();
let playerSelection = "Rock";
console.log(computerSelection.concat(" ").concat(playerSelection));
console.log(playRound(computerSelection, playerSelection));
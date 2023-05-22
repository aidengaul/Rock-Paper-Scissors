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
        return;

    if (computerSelection === "rock" && lowerCase === "scissors" || computerSelection === "paper" && lowerCase === "rock" || computerSelection === "scissors" && lowerCase === "paper")
        return 1;
    else
        return 0;
}

function game() {

    let result;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your choice?", "");
        const computerSelection = getComputerChoice();
        console.log(computerSelection.concat(" ").concat(playerSelection));

        result = playRound(computerSelection, playerSelection);

        if (result === 0) {
            playerScore++;
            console.log("You won this round!")
        }
        else if (result === 1) {
            computerScore++;
            console.log("You lost this round!")
        }
        else {
            console.log("This round was a tie!")
        }

        if (playerScore >= 3) {
            console.log("You won this game!");
            break;
        }
        else if (computerScore >= 3) {
            console.log("You lost this game!");
            break;
        }
    }

}

game();
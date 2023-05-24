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
    if (computerSelection === playerSelection)
        return;

    if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper")
        return 1;
    else
        return 0;
}

function verifyInput(playerInput) {
    if (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
        console.log("Invalid input, try again!")
        return false;
    }
    return true;
}

function game() {

    let result;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your choice?", "");
        const lowerCase = playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();

        if (!verifyInput(lowerCase)) {
            i--;
            continue;
        }

        console.log(`Computer picked ${computerSelection} and you picked ${playerSelection}`);

        result = playRound(computerSelection, lowerCase);

        if (result === 0) {
            playerScore++;
            console.log("You won this round!")
        }
        else if (result === 1) {
            computerScore++;
            console.log("You lost this round!")
        }
        else {
            i--;
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
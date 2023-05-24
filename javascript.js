function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) 
        return "rock";
    else if (num === 2)
        return "paper";
    else
        return "scissors";
}

function updateScores(roundResult) {
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

    if (roundResult) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
}

function playRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);

    const messageField = document.querySelector('#message');
    let playerWon = false;

    if (computerSelection === playerSelection) {
        messageField.textContent = "It's a tie!";
        return;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper") {
        messageField.textContent = "You lost this round!";
    }
    else {
        messageField.textContent = "You won this round!";
        playerWon = true;
    }

    updateScores(playerWon);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));
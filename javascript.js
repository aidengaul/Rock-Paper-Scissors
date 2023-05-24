function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) 
        return "rock";
    else if (num === 2)
        return "paper";
    else
        return "scissors";
}

function playRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    let playerWon = false;
    const messageField = document.querySelector('#message');

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

function updateScores(playerWon) {
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

    if (playerWon) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    checkGameStatus(playerScore.textContent, computerScore.textContent);
}

function checkGameStatus(playerScore, computerScore) {
    const messageField = document.querySelector('#message');

    if (playerScore === "5") {
        messageField.textContent = "You won! Want to play again?"
        unbindListeners();
    }
    else if (computerScore === "5") {
        messageField.textContent = "You lost! Try harder next time."
        unbindListeners();
    }
}

function unbindListeners() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.removeEventListener('click', playRound));
    playAgainButton();
}

function playAgainButton() {
    const container = document.querySelector('.container');
    const newGame = document.createElement('button');
    newGame.textContent = "Play Again";
    newGame.setAttribute("id", "play-again");

    container.appendChild(newGame);
    newGame.addEventListener('click', startNewGame);
}

function startNewGame() {
    const container = document.querySelector('.container');
    const newGame = document.querySelector('.container > button');
    container.removeChild(newGame);

    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    playerScore.textContent = "0";
    computerScore.textContent = "0";

    const messageField = document.querySelector('#message');
    messageField.textContent = "Select your weapon of choice to get started.";

    bindListeners();
}

function bindListeners() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.addEventListener('click', playRound));
}

bindListeners();
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
    
    console.log(playerSelection);
    console.log(computerSelection);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));
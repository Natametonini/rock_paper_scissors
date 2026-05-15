// CPU choice
let getComputerChoice = () => { 
    let resp = Math.floor(Math.random() * 3 + 1) ;

    if (resp === 1) return 'rock';
    else if (resp === 2) return 'paper';
    else if (resp === 3) return 'scissors';
}

// Human choice
let getHumanChoice = () => {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}

// Score system
let humanScore = 0;
let computerScore = 0;

// Get element for UI 
const resultsDiv = document.querySelector(".results");

// Round Function
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = "Its a tie!";
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        resultsDiv.textContent = "You lost! Paper beasts Rock";
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        resultsDiv.textContent = "You won! Rock beats Paper";
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors' ) {
        computerScore++;
        resultsDiv.textContent = 'You lost! Scissors beats Paper';
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        resultsDiv.textContent = 'You won! Paper beats Rock';
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        resultsDiv.textContent = 'You lost! Rock beats Scissors';
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        resultsDiv.textContent ='You won! Scissors beats Paper';
    }
}

// Choice options && Score UI

const rockBtn = document.getElementById("rock");
const paperBtb = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const playerScoreElement = document.querySelector("#playerScore");
const cpuScoreElement = document.querySelector("#cpuScore");
const finalResultElement = document.querySelector("#finalResults");

rockBtn.addEventListener("click", () => {

    // Run the game
    playRound("rock", getComputerChoice());

    // Display the score
    playerScoreElement.textContent = `You: ${humanScore}`;
    cpuScoreElement.textContent = `CPU: ${computerScore}`;

    // Display final result
    if (humanScore === 5) {
        finalResultElement.textContent = "You won the game!";
    } else if (computerScore === 5) {
        finalResultElement.textContent = "You lost the game!";
    }
})

paperBtb.addEventListener("click", () => {
    
    // Run the game
    playRound("paper", getComputerChoice());

    // Display the score
    playerScoreElement.textContent = `You: ${humanScore}`;
    cpuScoreElement.textContent = `CPU: ${computerScore}`;

    // Display final result
    if (humanScore === 5) {
        finalResultElement.textContent = "You won the game!";
    } else if (computerScore === 5) {
        finalResultElement.textContent = "You lost the game!";
    }
})

scissorsBtn.addEventListener("click", () => {

    // Run the game
    playRound("scissors", getComputerChoice());

    // Display the score
    playerScoreElement.textContent = `You: ${humanScore}`;
    cpuScoreElement.textContent = `CPU: ${computerScore}`;

    // Display final result
    if (humanScore === 5) {
        finalResultElement.textContent = "You won the game!";
    } else if (computerScore === 5) {
        finalResultElement.textContent = "You lost the game!";
    }
})




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
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const playerScoreElement = document.querySelector("#playerScore");
const cpuScoreElement = document.querySelector("#cpuScore");
const finalResultElement = document.querySelector("#finalResults");

// Function to avoid repitition
function choiceHandler(choice) {
    if (humanScore >= 5 || computerScore >= 5) return;

    playRound(choice, getComputerChoice());

    playerScoreElement.textContent = `YOU: ${humanScore}`;
    cpuScoreElement.textContent = `CPU: ${computerScore}`;

    if (humanScore === 5) {
        finalResultElement.textContent = "You won the game!";
        bu
    }
    else if (computerScore === 5) {
        finalResultElement.textContent = "You lost the game!";
    }
}

// Events
rockBtn.addEventListener("click", () => choiceHandler("rock"));
paperBtn.addEventListener("click", () => choiceHandler("paper"));
scissorsBtn.addEventListener("click", () => choiceHandler("scissors"));




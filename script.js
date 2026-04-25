// CPU choice
let getComputerChoice = () => { 
    let resp = Math.floor(Math.random() * 3 + 1) 

    if (resp === 1) return 'rock'
    else if (resp === 2) return 'paper'
    else if (resp === 3) return 'scissors'
}

// Human choice
let getHumanChoice = () => {
    return prompt("Rock, Paper or Scissors?").toLowerCase()
}

// Score system
let humanScore = 0
let computerScore = 0

// Round 
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Its a tie!') 
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++
        console.log('You lost! Paper beasts Rock' ) 
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++
        console.log('You win! Rock beats Paper')
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors' ) {
        computerScore++
        console.log('You lost! Scissors beats Paper')
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++
        console.log('You win! Paper beats Rock')
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++
        console.log('You lost! Rock beats Scissors')
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        console.log('You win! Scissors beats Paper')
    }
}

// Round loop 5x
let playGame = () => {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log(`You: ${humanScore} x CPU: ${computerScore}`)

    if (humanScore < computerScore) console.log("You lost!")
    else if (humanScore > computerScore) console.log("You won!")
    else console.log("Tie!")
}

playGame()







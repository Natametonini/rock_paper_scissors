# Rock, Paper and Scissors!
This is a *TOP* (The Odin Project) exercise (Foundations Course).
The code in this first lesson contains mainly basic Javascript. It *will* be improved in later versions and it a GUI *will* be included in the future. 
The purpose is to pratice JS and code planning. It will be utilized a problem solving approach, where there is gonna be: 
* A plan or pseudocode to the solution.

Pseudocose / Plan: 
### GET COMPUTER AWNSER 
-> Initialize function: getComputerChoice
-> Generate a random number from 1 to 3
* IF 1 -> return 'rock'
* ELSE IF 2 -> return 'paper'
* ELSE IF 3 -> return 'scissors'

### GET HUMAN AWNSER
-> Initialize function: getHumanChoice
-> return user awnser by prompt()

### SCORE SYSTEM
-> Initialize int variables: humanScore and computerScore with initial value of 0

### ROUND SYSTEM
-> Initialize function: playRound with parameters: humanChoice and computerChoice
-> Convert humanChoice to lowercase
* IF humanChoice == computeChoice -> tie
* ELSE IF humanChoice beats computerChoice -> human wins
* ELSE computerChoice beats humanChoice -> computer wins
-> Print winner: "You X! Y beats Z"
-> Increment the winner's score

### REPEAT FOR 5 ROUNDS
-> Create a simple loop to repeat the function 5 times
-> Get human choice
-> Get computer choice

### POST GAME
-> Print the score
-> Print final winner







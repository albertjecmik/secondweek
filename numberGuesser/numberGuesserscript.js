let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    const num = Math.random();
    return Math.round(num * 10)
}

function compareGuesses (userGuess, computerGuess, secretTarget){
    const human = Math.abs(userGuess - secretTarget);
    const computer = Math.abs(computerGuess - secretTarget);
    if (human <= computer){
        return true
    }
    else {
        return false
    }  
}

function updateScore (winner){
    if (winner === 'computer'){
        computerScore += 1;
    }
        else if (winner === 'human'){
            humanScore += 1;
        }
    else{
        console.log('Fuck off!')
    }
}

const advanceRound = () =>{
    currentRoundNumber += 1
}
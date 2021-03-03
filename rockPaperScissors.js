const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'){
    return userInput
  }
  else if (userInput === 'paper'){
    return userInput
  }
  else if (userInput === 'scissors'){
    return userInput
  }
  else if (userInput === 'bomb'){
    return userInput
  }
  else {
    console.log('Error. Wrong input given.')
  }
}

function getComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is tied!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer has won.';
    } else {
        return 'You won!';
      }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return 'Computer has won.';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return 'Computer has won.';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'bomb'){
    return 'You won!';
  }
};

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();
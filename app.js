const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('.choice-btn');
const resultDiv = document.getElementById('result');
const computerChoiceDiv = document.getElementById('computer-choice');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const playerChoice = this.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    
    computerChoiceDiv.textContent = `Computer chose: ${computerChoice}`;

    const winner = determineWinner(playerChoice, computerChoice);

    if (winner === 'draw') {
      resultDiv.textContent = "It's a draw!";
    } else if (winner === 'player') {
      resultDiv.textContent = "You win!";
    } else {
      resultDiv.textContent = "Computer wins!";
    }
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

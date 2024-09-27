const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.choice-btn');
const resultDiv = document.getElementById('result');
const computerChoiceDiv = document.getElementById('computer-choice');
const scoreDiv = document.getElementById('score');


buttons.forEach(button => {
  button.addEventListener('click', function() {
    const playerChoice = this.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    
    computerChoiceDiv.textContent = `Computer chose: ${computerChoice}`;

    const winner = determineWinner(playerChoice, computerChoice);

    if (winner === 'player') {
        playerScore++;
        resultDiv.textContent = "You win!";
      } else if (winner === 'computer') {
        computerScore++;
        resultDiv.textContent = "Computer wins!";
      } else {
        resultDiv.textContent = "It's a draw!";
      }

       scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`
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

let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultMessage = '';
  if (userChoice === computerChoice) {
    resultMessage = `It's a draw! You both chose ${userChoice}.`;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    userScore++;
    resultMessage = `🎉 You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultMessage = `😞 You lose! ${computerChoice} beats ${userChoice}.`;
  }

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = resultMessage;
}
function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = 'Choose your move!';
}


'use strict';
/*
console.log(document.querySelector('.between').textContent);
gameMessage('🎉 Correct Number!';
document.querySelector('.guess').value = 0;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function gameMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    gameMessage('No Number Entered 😒');
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    gameMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      gameMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gameMessage('💥 YOU LOOSE THE GAME');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  gameMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

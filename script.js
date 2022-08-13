"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".game-correct-ans").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".input-number").value);
  console.log(inputNumber, typeof inputNumber);

  // when there is no input
  if (!inputNumber) {
    document.querySelector(".guessing-text").textContent = "🤔 No number!";

    // when player wins
  } else if (inputNumber === secretNumber) {
    document.querySelector(".guessing-text").textContent = "🤩 Correct number!";

    // when guess is high
  } else if (inputNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".guessing-text").textContent = "🙄 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guessing-text").textContent = "😒 Game over!";
      document.querySelector(".score").textContent = 0;
    }

    // when guess is low
  } else if (inputNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".guessing-text").textContent = "😐 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guessing-text").textContent = "😒 Game over!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

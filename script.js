"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".input-number").value);
  console.log(inputNumber, typeof inputNumber);

  // when there is no input
  if (!inputNumber) {
    document.querySelector(".guessing-text").textContent = "🤔 No number!";

    // when player wins
  } else if (inputNumber === secretNumber) {
    document.querySelector(".guessing-text").textContent = "🤩 Correct number!";
    document.querySelector(".game-correct-ans").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "teal";

    document.querySelector(".game-correct-ans").style.backgroundColor = "#222";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }

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

document.querySelector(".play-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".game-correct-ans").style.backgroundColor = "teal";
  document.querySelector(".guessing-text").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".input-number").value = "";
  document.querySelector(".game-correct-ans").textContent = "?";
});

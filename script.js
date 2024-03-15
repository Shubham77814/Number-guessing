const randomNumber = parseInt(Math.random() * 100 + 1);

let userInput = document.querySelector("#guessField");
let submitBtn = document.querySelector(".submit");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

previousGuess = [];
numberGuess = 1;

let playGame = true;
if (playGame) {
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Enter a number more than 1");
  } else if (guess > 100) {
    alert("Enter a number less than 100");
  } else {
    previousGuess.push(guess);
    if (numberGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (randomNumber === guess) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low");
  } else if (guess > randomNumber) {
    displayMessage("Number is too high");
  }
}

function displayGuess(guess) {
  userInput.value = " ";
  guessSlot.innerHTML += `${guess} `;
  numberGuess++;
  remaining.innerHTML = `${11 - numberGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", ""); 
}

function startGame(){
  
}


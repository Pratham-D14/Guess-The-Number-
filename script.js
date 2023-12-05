// Creating a Random Number
let secretNumber = Math.round(Math.random() * 20) + 1;

// Declaring the score & Highscore in the Global State
let score = 20;
let highScore = 0;

// Creating a function expression to display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Login of the Game
document.querySelector(".check").addEventListener("click", function () {
  // let number = document.querySelector("guess");
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // If Input is Empty
  if (!guess) {
    if (score > 1) {
      displayMessage("🚫 Please Enter a Number");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😔 You Lost The Game");
      document.querySelector("body").style.backgroundColor =
        "rgba(218, 28, 28, 0.918)";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".score").textContent = 0;
    }

    // If Input is Correct
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    displayMessage("🎉 Correct Guess");
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").textContent = secretNumber;

    // If Input is lesser than Secret Number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "📉 Too Low" : "📈 Too High");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😔 You Lost The Game");
      document.querySelector("body").style.backgroundColor =
        "rgba(218, 28, 28, 0.918)";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Functionality for the Again Button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.round(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});

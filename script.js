// Creating a Random Number
let secretNumber = Math.round(Math.random() * 20) + 1;

// Declaring the score & Highscore in the State
let score = 20;
let highScore = 0;

// Login of the Game
document.querySelector(".check").addEventListener("click", function () {
  // let number = document.querySelector("guess");
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // If Input is Empty
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 Please Enter a Number";
    score--;
    document.querySelector("score").textContent = score;

    // If Input is Correct
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector(".message").textContent = "🎉 Correct Guess";
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").textContent = secretNumber;

    // If Input is lesser than Secret Number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😔 You Lost The Game";
      document.querySelector("body").style.backgroundColor =
        "rgba(218, 28, 28, 0.918)";

      document.querySelector(".score").textContent = 0;
    }

    // If Input is Greater than Secret Number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😔 You Lost The Game";
      document.querySelector("body").style.backgroundColor =
        "rgba(218, 28, 28, 0.918)";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Functionality for the Again Button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.round(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});

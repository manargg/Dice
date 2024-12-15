
window.onload = function () {
  // Set a delay before updating the dice
  setTimeout(function () {
    // Generate random numbers for the two dice
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Update the dice images
    document.querySelector(".img1").setAttribute("src", "./images/perspective-dice-six-faces-" + randomNumber1 + ".svg");
    document.querySelector(".img2").setAttribute("src", "./images/perspective-dice-six-faces-" + randomNumber2 + ".svg");

    // Update the result message
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "It's a Draw!";
    }
  }, 600); // Delay of 600ms 
};


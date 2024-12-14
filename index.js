
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


document.querySelector(".img1").setAttribute("src", "./images/perspective-dice-six-faces-"+ randomNumber1+".svg");

document.querySelector(".img2").setAttribute("src", "./images/perspective-dice-six-faces-"+ randomNumber2+".svg");


if(randomNumber1 > randomNumber2)
   document.querySelector("h1").innerHTML ="Player 1 wins!";
else if(randomNumber2 > randomNumber1)
    document.querySelector("h1").innerHTML = "Player 2 wins!";
else
    document.querySelector("h1").innerHTML = "Draw!";
 
    
/*
// Wait for the DOM to fully load before running the script
window.onload = function () {
    // Generate random numbers for the two dice
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  
    // Update dice images based on the random numbers
    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
  
    // Change the title (h1) based on the dice roll results
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "It's a Draw!";
    }
  };*/
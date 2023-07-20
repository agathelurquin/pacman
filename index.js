import Game from "./game.js";

// variable to trigger the game
let game;
const startButton = document.getElementById("start");

// new Game trigger
startButton.addEventListener("click", () => {
  startButton.disabled = true;
  game = new Game();
  game.startThatGame();
});

// getting user input continuously to control Pacman's movements
window.addEventListener("keydown", (event) => {
  event.preventDefault();
  switch (event.key) {
    case "ArrowUp":
      game.pacman.direction = "up";
      break;
    case "ArrowRight":
      game.pacman.direction = "right";
      break;
    case "ArrowDown":
      game.pacman.direction = "down";
      break;
    case "ArrowLeft":
      game.pacman.direction = "left";
      break;
  }
});

// Next calls in game.js

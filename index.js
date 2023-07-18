import Game from "./game.js";

let game;
const startButton = document.getElementById("start");

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  game = new Game();
  game.startThatGame();
});

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
  // move(direction);
});

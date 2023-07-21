import Game from "./game.js";

// variable to trigger the game
let game;
const startButton = document.getElementById("start");
const winScreen = document.getElementById("win-screen");
const looseScreen = document.getElementById("loose-screen");

const welcomeSound = document.getElementById("welcome-music");
window.addEventListener("mousemove", () => {
  welcomeSound.volume = 0.7;
  welcomeSound.play();
  welcomeSound.loop = true;
});

// new Game trigger
function start() {
  if (game) {
    game.reset();
  }
  startButton.disabled = true;
  game = new Game();
  game.startThatGame();
}
startButton.addEventListener("click", start);

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

// window.addEventListener("click", (event) => {
//   event.preventDefault();
//   switch (event.key) {
//     case "ArrowUp":
//       game.pacman.direction = "up";
//       break;
//     case "ArrowRight":
//       game.pacman.direction = "right";

//       break;
//     case "ArrowDown":
//       game.pacman.direction = "down";
//       break;
//     case "ArrowLeft":
//       game.pacman.direction = "left";

//       break;
//   }
// });

winScreen.querySelector("button").addEventListener("click", start);
looseScreen.querySelector("button").addEventListener("click", start);
// Next calls in game.js

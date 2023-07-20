import gameField from "./data.js"; // to get access to the game's matrix
import Pacman from "./pacman.js"; // to get Pacman's behaviors
import Ghost from "./ghost.js"; // to get Ghosts' behaviors
const winScreen = document.getElementById("win-screen");
const looseScreen = document.getElementById("loose-screen");

export default class Game {
  constructor() {
    this.mazeElement = document.querySelector(".maze");
    this.matrix = this.generateMatrix();
    this.pacman = new Pacman(23, 13, "current");
    this.ghost = new Ghost(14, 5, "ghost3");
    this.score = 0;
    this.intervalId = null;
    this.scoreElement = document.querySelector(".score span");
    this.lifeElement = document.querySelector(".lives span");
    this.resultsElement = document.querySelector(".results span");
  }

  // each time we click start game, a new Pacman grid is generated
  // with the classes that define if the cell is a wall, a point, a character or empty
  generateMatrix() {
    for (let i = 0; i < gameField.length; i++) {
      for (let j = 0; j < gameField[i].length; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("x", i);
        cell.setAttribute("y", j);

        switch (gameField[i][j]) {
          case 0:
            cell.classList.add("wall");
            break;
          case 1:
            cell.classList.add("point");
            cell.innerHTML = "&sdot;";
            break;
          case 2:
            cell.classList.add("maxi-point");
            cell.innerHTML = "&sdot;";
            break;
          case 9:
            cell.classList.add("monster");
            break;
          default:
            break;
        }
        this.mazeElement.append(cell);
      }
    }

    return gameField;
  }

  // Each time we click start game, we start listening to Pacman's movements every 2ms

  startThatGame() {
    document.querySelector(".score").classList.remove("hidden");
    document.querySelector(".lives").classList.remove("hidden");
    document.querySelector(".results").classList.remove("hidden");
    this.intervalId = setInterval(() => {
      // console.log("Running");
      this.pacman.move(this.pacman.direction);
      this.ghost.ghostMove();

      // Count the score when touching new dots
      this.getPoints();

      // Allows Pacman to go through the "secret gate"
      this.pacman.changeSides();
      this.loseLives();
      this.displayResult();
      // this.reset();
    }, 200);
    // if pacman.currentCell === ghost.previousCell
  }

  // Counts score when touching dots
  getPoints() {
    // touch normal dots
    if (
      this.pacman.cellContainsPoints("maxi-point") ||
      this.pacman.cellContainsPoints("point")
    ) {
      this.scoreElement.textContent = this.score;
      this.pacman.clearCell();
    }

    // touch super dots
    if (this.pacman.cellContainsPoints("point")) {
      this.score += 10;
      this.pacman.removeClass("point");
    }
    if (this.pacman.cellContainsPoints("maxi-point")) {
      this.score += 50;
      this.pacman.removeClass("maxi-point");
    }
    return this.score;
  }

  renderLives() {
    let lifeCount = document.createElement("div");
    lifeCount.textContent = `Lives: ${this.pacman.remainingLives}/3`;
    this.lifeElement.append(lifeCount);
  }

  loseLives() {
    if (
      this.pacman.x === Number(this.ghost.previousX) &&
      this.pacman.y === Number(this.ghost.previousY)
    ) {
      this.pacman.remainingLives -= 1;
      this.lifeElement.textContent = this.pacman.remainingLives;
    }
  }

  displayResult() {
    let result = document.createElement("div");
    if (this.score >= 8000) {
      this.resultsElement.append(result);
      clearInterval(this.intervalId);
      this.intervalId = null;
      winScreen.showModal();
    }
    if (this.pacman.remainingLives === 2) {
      this.resultsElement.append(result);
      clearInterval(this.intervalId);
      this.intervalId = null;
      looseScreen.showModal();
    }
  }

  reset() {
    this.mazeElement.innerHTML = "";
    winScreen.close();
    looseScreen.close();
  }
  // restart() {
  //   if (this.remainingLives < 3) {
  //     clearInterval(this.intervalId);
  //     this.startThatGame();
  //   }
  // }
}

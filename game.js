import gameField from "./data.js"; // to get access to the game's matrix
import Pacman from "./pacman.js"; // to get Pacman's behaviors
import Ghost from "./ghost.js"; // to get Ghosts' behaviors
const winScreen = document.getElementById("win-screen");
const looseScreen = document.getElementById("loose-screen");
const gameRules = document.querySelector("game__intro");

export default class Game {
  constructor() {
    this.mazeElement = document.querySelector(".maze");
    this.matrix = this.generateMatrix();
    this.pacman = new Pacman(23, 13, "current");
    this.ghost1 = new Ghost(14, 5, "ghost3");
    this.ghost2 = new Ghost(14, 6, "ghost2");
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

        // CSS SELECTORS FOR PACMAN GRID
        if (
          i > 0 &&
          gameField[i - 1][j] === 1 &&
          gameField[i][j - 1] === 1 &&
          cell.classList.contains("wall")
        ) {
          cell.classList.add("corner-top-left");
        } else if (
          i > 0 &&
          j < 26 &&
          gameField[i - 1][j] === 1 &&
          gameField[i][j + 1] === 1 &&
          cell.classList.contains("wall")
        ) {
          cell.classList.add("corner-top-right");
        } else if (
          i < 30 &&
          gameField[i + 1][j] === 1 &&
          gameField[i][j - 1] === 1 &&
          cell.classList.contains("wall")
        ) {
          console.log(cell);
          cell.classList.add("corner-bottom-left");
        } else if (
          i < 30 &&
          j < 26 &&
          gameField[i + 1][j] === 1 &&
          gameField[i][j + 1] === 1 &&
          cell.classList.contains("wall")
        ) {
          cell.classList.add("corner-bottom-right");
        }

        if (
          i > 0 &&
          gameField[i - 1][j] === 1 &&
          cell.classList.contains("wall")
        ) {
          cell.classList.add("top-border");
        } else if (
          j < 26 &&
          gameField[i][j + 1] === 1 &&
          cell.classList.contains("wall")
        ) {
          cell.classList.add("right-border");
        } else if (
          i < 30 &&
          gameField[i + 1][j] === 1 &&
          cell.classList.contains("wall")
        ) {
          cell.classList.add("bottom-border");
        } else if (
          j > 0 &&
          gameField[i][j - 1] === 1 &&
          cell.classList.contains("wall")
        ) {
          cell.classList.add("left-border");
        }
        // END OF CSS SELECTORS
        this.mazeElement.append(cell);
      }

      // for each cell
      // (x-1)(y)  ==> class top
      // if cell de gauche =1 ==> class left
      // if cell de droite = 1 ==> classe right
      // if cell de bas = 1 ==> class down
    }

    return gameField;
  }

  // Each time we click start game, we start listening to Pacman's movements every 2ms

  startThatGame() {
    document.querySelector(".score").classList.remove("hidden");
    document.querySelector(".lives").classList.remove("hidden");
    document.querySelector(".results").classList.remove("hidden");
    document.querySelector(".game__intro").classList.remove("hidden");
    this.intervalId = setInterval(() => {
      // console.log("Running");
      this.pacman.move(this.pacman.direction);
      this.ghost1.ghostMove();
      this.ghost2.ghostMove();

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
      (this.pacman.x === Number(this.ghost1.previousX) &&
        this.pacman.y === Number(this.ghost1.previousY)) ||
      (this.pacman.x === Number(this.ghost2.previousX) &&
        this.pacman.y === Number(this.ghost2.previousY))
    ) {
      this.pacman.remainingLives -= 1;
      this.lifeElement.textContent = this.pacman.remainingLives;
    }
  }

  displayResult() {
    let result = document.createElement("div");
    if (this.score >= 80) {
      this.resultsElement.append(result);
      clearInterval(this.intervalId);
      this.intervalId = null;
      winScreen.showModal();
    }
    if (this.pacman.remainingLives === 0) {
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

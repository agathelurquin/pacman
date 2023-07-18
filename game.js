import gameField from "./data.js";
import Pacman from "./pacman.js";

export default class Game {
  constructor() {
    this.mazeElement = document.querySelector(".maze");
    this.matrix = this.generateMatrix();
    this.pacman = new Pacman(23, 13, "current");
    this.ghost = [];
    this.score = 0;
    this.intervalId = null;
    this.scoreElement = document.querySelector(".score span");
  }

  generateMatrix() {
    for (let i = 0; i < gameField.length; i++) {
      for (let j = 0; j < gameField[i].length; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("x", i);
        cell.setAttribute("y", j);
        if (gameField[i][j] === 0) {
          cell.classList.add("wall");
        } else if (gameField[i][j] === 1) {
          cell.classList.add("point");
          cell.innerHTML = "&sdot;";
        } else if (gameField[i][j] === 2) {
          cell.classList.add("maxi-point");
          cell.innerHTML = "&sdot;";
        }
        this.mazeElement.append(cell);
      }
    }

    return gameField;
  }

  startThatGame() {
    document.querySelector(".score").classList.remove("hidden");
    this.intervalId = setInterval(() => {
      console.log("Running");
      this.pacman.move(this.pacman.direction);
      if (this.pacman.cellContainsPoints()) {
        this.score++;
        this.scoreElement.textContent = this.score;
        this.pacman.removeClass("point");
        this.pacman.clearCell();
        console.log(this.score);
      }
      // for (let i = 0; i < this.ghost.length; i++) {
      //   const element = this.ghost[i];
      //   element.move(element.direction);
      // }
    }, 200);
  }

  display() {}
}

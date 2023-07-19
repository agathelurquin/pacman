import gameField from "./data.js";
import Pacman from "./pacman.js";
import Ghost from "./ghost.js";

export default class Game {
  constructor() {
    this.mazeElement = document.querySelector(".maze");
    this.matrix = this.generateMatrix();
    this.pacman = new Pacman(23, 13, "current");
    this.ghost = new Ghost(23, 16, "ghost3");
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

  startThatGame() {
    document.querySelector(".score").classList.remove("hidden");
    this.intervalId = setInterval(() => {
      console.log("Running");
      this.pacman.move(this.pacman.direction);

      if (
        this.pacman.cellContainsPoints("maxi-point") ||
        this.pacman.cellContainsPoints("point")
      ) {
        this.scoreElement.textContent = this.score;
        this.pacman.clearCell();
      }

      if (this.pacman.cellContainsPoints("point")) {
        this.score += 10;
        this.pacman.removeClass("point");
      }
      if (this.pacman.cellContainsPoints("maxi-point")) {
        this.score += 50;
        this.pacman.removeClass("maxi-point");
      }

      this.pacman.changeSides;
      // for (let i = 0; i < this.ghost.length; i++) {
      //   const element = this.ghost[i];
      //   element.move(element.direction);
      // }
    }, 200);
  }
}

import Pacman from "./pacman.js";
import Game from "./game.js";

const whoosh = document.getElementById("whoosh");

export default class Character {
  constructor(x, y, classes) {
    this.x = x;
    this.y = y;
    this.classes = classes;
    this.direction = "";
    this.currentCell = document.querySelector(`[x="${this.x}"][y="${this.y}"]`);
    this.previousCell = document.querySelector(
      `[x="${this.x}"][y="${this.y}"]`
    );
    this.previousX = this.previousCell.getAttribute("x");
    this.previousY = this.previousCell.getAttribute("y");
    // Allows the character image to move from cell to cell
    this.currentCell.classList.add(this.classes);
    this.possibleMoves;
  }

  // defines the common behaviors of all characters
  move(direction = this.direction) {
    // Prevents bug if no direction is passed
    if (!this.direction) return;

    // Stores the cell we are moving from and updates the new cell to currentCell
    this.direction = direction;
    this.previousCell = this.currentCell;
    this.previousX = this.x;
    this.previousY = this.y;

    // Selects the new cell
    switch (direction) {
      case "up":
        this.currentCell = document.querySelector(
          `[x="${this.x - 1}"][y="${this.y}"]`
        );
        break;
      case "right":
        this.currentCell = document.querySelector(
          `[x="${this.x}"][y="${Number(this.y === 26 ? 0 : this.y + 1)}"]`
        );
        break;
      case "down":
        this.currentCell = document.querySelector(
          `[x="${Number(this.x) + 1}"][y="${this.y}"]`
        );
        break;
      case "left":
        this.currentCell = document.querySelector(
          `[x="${this.x}"][y="${this.y === 0 ? 26 : this.y - 1}"]`
        );
        break;
    }

    // Move the character image from cell to cell
    if (this.currentCell && !this.currentCell.classList.contains("wall")) {
      // Deletes the image from the previous cell
      this.previousCell.classList.remove(this.classes, this.direction);
      // Moves the image to the new cell
      this.currentCell.classList.add(this.classes, this.direction);
      // Updates the coordinate variables of the character
      this.updateXAndY(direction);
    } else {
      // for later, if we try to go through a wall, add css effect like buzzing or something
      this.currentCell = this.previousCell;
      this.currentCell.classList.add(this.classes, this.direction);
    }
  }

  updateXAndY(direction) {
    switch (direction) {
      case "up":
        --this.x;
        break;
      case "right":
        this.y = this.y === 26 ? 0 : this.y + 1;

        break;
      case "down":
        ++this.x;
        break;
      case "left":
        this.y = this.y === 0 ? 26 : this.y - 1;
        break;
    }
    // this.changeProfile(direction);
  }

  addClass(cellClass) {
    this.currentCell.classList.add(...cellClass);
  }
  removeClass(cellClass) {
    this.currentCell.classList.remove(...cellClass);
  }

  clearCell() {
    // this.currentCell.innerHTML = "";
  }

  // Identify the surrounding cells
  getCell(x, y) {
    let nextUp = document.querySelector(`[x="${x - 1}"][y="${y}"]`);
    let nextDown = document.querySelector(`[x="${Number(x) + 1}"][y="${y}"]`);
    let nextRight = document.querySelector(
      `[x="${x}"][y="${Number(y === 26 ? 0 : y + 1)}"]`
    );
    let nextLeft = document.querySelector(
      `[x="${x}"][y="${y === 0 ? 26 : y - 1}"]`
    );

    let nextCells = [nextUp, nextRight, nextDown, nextLeft];
    return nextCells;
  }

  changeSides() {
    if (
      this.x === 14 &&
      this.y === 0 &&
      this.previousCell.getAttribute("y") === "1"
    ) {
      whoosh.volume = 0.7;
      whoosh.play();
      setTimeout(() => {
        this.x = 14;
        this.y = 27;
      }, 200);
    }
    if (
      this.x === 14 &&
      this.y === 26 &&
      this.previousCell.getAttribute("y") === "25"
    ) {
      whoosh.volume = 0.7;
      whoosh.play();
      setTimeout(() => {
        this.x = 14;
        this.y = -1;
      }, 200);
    }
  }
}

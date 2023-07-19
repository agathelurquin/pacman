import Character from "./character.js";

export default class Pacman extends Character {
  constructor(x, y, classes) {
    super(x, y, classes);
    this.remainingLives = 3;
  }

  cellContainsPoints(cellClass) {
    return this.currentCell.classList.contains(cellClass);
  }

  changeSides() {
    if (
      this.x === 14 &&
      this.y === 0 &&
      this.previousCell.getAttribute("y") === "1"
    ) {
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
      setTimeout(() => {
        this.x = 14;
        this.y = -1;
      }, 200);
    }
  }

  // loseLife() {
  //   this.remainingLives--;
  // }
}

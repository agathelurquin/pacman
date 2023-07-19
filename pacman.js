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
    if (this.x === 14 && this.y === 0) {
      console.log(this.x, this.y);
      setTimeout(() => {
        this.x = 14;
        this.y = 27;
        console.log(this.x, this.y);
      }, 200);
    }
  }

  loseLife() {
    this.remainingLives--;
  }
}

import Character from "./character.js";

export default class Pacman extends Character {
  constructor(x, y, classes) {
    super(x, y, classes);
    this.remainingLives = 3;
  }

  cellContainsPoints(cellClass) {
    return this.currentCell.classList.contains(cellClass);
  }

  // loseLife() {
  //   this.remainingLives--;
  // }
}

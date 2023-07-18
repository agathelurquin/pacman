import Character from "./character.js";

export default class Pacman extends Character {
  constructor(x, y, classes) {
    super(x, y, classes);
  }

  cellContainsPoints() {
    return this.currentCell.classList.contains("point");
  }
}

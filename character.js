export default class Character {
  constructor(x, y, classes) {
    this.x = x;
    this.y = y;
    this.classes = classes;
    this.direction = "";
    this.currentCell = document.querySelector(`[x="${this.x}"][y="${this.y}"]`);
    this.previousCell = null;
    this.currentCell.classList.add(this.classes);
  }

  move(direction = this.direction) {
    console.log(direction);
    if (!this.direction) return;
    this.previousCell = this.currentCell;
    switch (direction) {
      case "up":
        this.currentCell = document.querySelector(
          `[x="${this.x - 1}"][y="${this.y}"]`
        );
        break;
      case "right":
        this.currentCell = document.querySelector(
          `[x="${this.x}"][y="${Number(this.y) + 1}"]`
        );
        break;
      case "down":
        this.currentCell = document.querySelector(
          `[x="${Number(this.x) + 1}"][y="${this.y}"]`
        );
        break;
      case "left":
        this.currentCell = document.querySelector(
          `[x="${this.x}"][y="${this.y - 1}"]`
        );
        break;
    }
    console.log(this.currentCell);
    if (this.currentCell && !this.currentCell.classList.contains("wall")) {
      this.previousCell.classList.remove(this.classes);
      this.currentCell.classList.add(this.classes);
      // this.x = Number(this.currentCell.getAttribute('x'))
      // this.y = Number(this.currentCell.getAttribute('y'))
      switch (direction) {
        case "up":
          --this.x;
          break;
        case "right":
          ++this.y;
          break;
        case "down":
          ++this.x;
          break;
        case "left":
          --this.y;
          break;
      }
    } else {
      this.currentCell = this.previousCell;
      this.currentCell.classList.add("bug");
      setTimeout(() => {
        this.currentCell.classList.remove("bug");
      }, 200);
    }
  }
}

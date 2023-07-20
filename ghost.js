import Character from "./character.js";

export default class Ghost extends Character {
  constructor(x, y, classes) {
    super(x, y, classes);
    this.direction = "up";
  }

  nextMoves() {
    // get the surronding cells

    // console.log("x===", this.x, "y===", this.y);
    let nextCellsGhost = super.getCell(this.x, this.y);
    // check which are walls and get and array of the next possible moves
    this.possibleMoves = [];

    if (!nextCellsGhost[0].classList.contains("wall")) {
      this.possibleMoves.push({ direction: "up", cell: nextCellsGhost[0] });
    }
    if (!nextCellsGhost[1].classList.contains("wall")) {
      this.possibleMoves.push({ direction: "right", cell: nextCellsGhost[1] });
    }
    if (!nextCellsGhost[2].classList.contains("wall")) {
      this.possibleMoves.push({ direction: "down", cell: nextCellsGhost[2] });
    }
    if (!nextCellsGhost[3].classList.contains("wall")) {
      this.possibleMoves.push({ direction: "left", cell: nextCellsGhost[3] });
    }

    // prevents the ghost from going backwards
    switch (this.direction) {
      case "up":
        this.possibleMoves = this.possibleMoves.filter(
          (move) => move.direction !== "down"
        );
        break;
      case "right":
        this.possibleMoves = this.possibleMoves.filter(
          (move) => move.direction !== "left"
        );
        break;
      case "down":
        this.possibleMoves = this.possibleMoves.filter(
          (move) => move.direction !== "up"
        );
        break;
      case "left":
        this.possibleMoves = this.possibleMoves.filter(
          (move) => move.direction !== "right"
        );
        break;
    }
    // console.log(this.possibleMoves);
    // choose one direction among the possible moves to pass to the method move()
    let nextMove =
      this.possibleMoves[Math.floor(Math.random() * this.possibleMoves.length)];
    this.direction = nextMove.direction;
    this.weirdCell = nextMove.cell;
    return nextMove.direction;
  }

  ghostMove() {
    super.move(this.nextMoves());
  }
}

// if ghosts x are between x==this and x==that && ghosts y are between y==this and y==that
// + ghost 1 waiting at the entrance of the ghost house (x13 y 13)
// generate random x & y within that zone while pacman has not moved
// once keydown, generate first ghost path
// set interval to generate the other ghosts
// when ghost is on a cell, remove class of dot, add class of ghost, then add it again for pacman to eat it
// when collision

// when pacman get to a maxi point
// new CSS class

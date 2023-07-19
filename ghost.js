import Character from "./character.js";

export default class Ghost extends Character {
  constructor(x, y, classes) {
    super(x, y, classes);
    this.direction = "up";
  }

  nextMoves() {
    // get the surronding cells
    let nextCellsGhost = super.getCell(this.x, this.y);
    // check which are walls and get and array of the next possible moves
    this.possibleMoves = [];
    if (!nextCellsGhost[0].classList.contains("wall")) {
      this.possibleMoves.push("up");
    }
    if (!nextCellsGhost[1].classList.contains("wall")) {
      this.possibleMoves.push("right");
    }
    if (!nextCellsGhost[2].classList.contains("wall")) {
      this.possibleMoves.push("down");
    }
    if (!nextCellsGhost[3].classList.contains("wall")) {
      this.possibleMoves.push("left");
    }

    // prevents the ghost from going backwards
    switch (this.direction) {
      case "up":
        this.possibleMoves = this.possibleMoves.filter(
          (move) => move !== "down"
        );
        break;
      case "right":
        this.possibleMoves = this.possibleMoves.filter(
          (move) => move !== "left"
        );
        break;
      case "down":
        this.possibleMoves = this.possibleMoves.filter((move) => move !== "up");
        break;
      case "left":
        this.possibleMoves = this.possibleMoves.filter(
          (move) => move !== "right"
        );
        break;
    }

    // choose one direction among the possible moves to pass to the method move()
    let nextMove =
      this.possibleMoves[Math.floor(Math.random() * this.possibleMoves.length)];
    this.direction = nextMove;

    return nextMove;
    // definir direction
    // this.direction== possibleMoves.random
  }

  ghostMove() {
    // definir direction
    // this.direction== possibleMoves.random
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

// vers gauche
// quand mur
// evaluer cell top cell down

// possibleMoves[];
// si il y a pas wall à gauche , je push gauche dans l'array
// si il y a pas wall à droite , je push droite dans l'array
// si il y a pas wall à top , je push top dans l'array
// si il y a pas wall à down , je push down  dans l'array

// if top libre, je vais au top
// if not go down
// if not got right
// if not go left

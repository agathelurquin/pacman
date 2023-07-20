// // CREATION DU PLAN
// const maze = document.querySelector('.maze');
// let matrix = [
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
//   [0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
//   [0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
//   [0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
//   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
//   [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
//   [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
//   [0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0],
//   [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,1,0,0,1,0,0,0,9,0,0,0,1,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,1,0,0,1,0,9,9,9,9,9,0,1,0,0,1,0,0,0,0,0,0],
//   [1,1,1,1,1,1,1,1,1,1,0,9,9,9,9,9,0,1,1,1,1,1,1,1,1,1,1],
//   [0,0,0,0,0,0,1,0,0,1,0,9,9,9,9,9,0,1,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
//   [0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
//   [0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
//   [0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
//   [0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0],
//   [0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0],
//   [0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
//   [0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0],
//   [0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
//   [0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
//   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// ];

// /**
//  * Game
//  *
//  * - this.matrix = []
//  * - this.pacman = null
//  * - s = []
//  *
//  *
//  * generateMatrix
//  *
//  *
//  * start() {}
//  *
//  *
//  */

// /**
//  * Character
//  *
//  * this.className
//  * this.x
//  *
//  */

// function generateMatrix() {

//   for (let i=0; i <matrix.length; i++){
//    // matrix.push([])
//     for (let j=0; j<matrix[i].length; j++){
//       // matrix[i].push("")
//       let cell = document.createElement('div');
//       cell.textContent = `${i},${j}`;
//       cell.classList.add("cell");
//       cell.setAttribute('x', i);
//       cell.setAttribute('y', j);
//       //matrix[i].push(cell);
//       if (matrix[i][j] === 0) {
//         cell.classList.add('wall')
//       } else if(matrix[i][j] === 1){
//         cell.classList.add('point');
//         cell.innerHTML="&sdot;";
//       } else if(matrix[i][j] === 2){
//         cell.classList.add('maxi-point', 'point');
//         cell.innerHTML="&sdot;";
//       }
//       maze.append(cell)
//     }
//   }

// }
// generateMatrix()

// let startingPoint = document.querySelector('[x="23"][y="13"]')
// startingPoint.classList.add('current')
// let currentCell = document.querySelector('.current');
// let currentCellX = currentCell.getAttribute("x");
// let currentCellY = currentCell.getAttribute("y");

// // 28x31

// // DIRECTIONS

// let direction = ''

// window.addEventListener('keydown', (event)=>{
//   switch(event.key){
//     case 'ArrowUp':
//       direction = 'up';
//       break;
//     case 'ArrowRight':
//       direction = 'right';
//       break;
//     case 'ArrowDown':
//       direction = 'down';
//       break;
//     case 'ArrowLeft':
//       direction = 'left';
//       break;
//   }
//   console.log(direction)
//   move(direction);
// })

// function move(direction, character){

//   if (!direction) return
//   let newCell
//   switch (direction) {
//     case 'up':
//       newCell = document.querySelector(`[x="${currentCellX-1}"][y="${currentCellY}"]`);
//       //currentCell.classList.add("current")
//     break;
//     case "right":
//       newCell = document.querySelector(`[x="${currentCellX}"][y="${Number(currentCellY)+1}"]`);
//       //currentCell.classList.add("current")
//     break;
//     case "down":

//       newCell = document.querySelector(`[x="${Number(currentCellX) + 1}"][y="${currentCellY}"]`);
//       //urrentCell.classList.add("current")
//     break;
//     case "left":

//       newCell = document.querySelector(`[x="${currentCellX}"][y="${currentCellY-1}"]`);
//       //currentCell.classList.add("current")
//     break;
//   }
//   if (newCell && !newCell.classList.contains('wall')) {
//     currentCell.classList.remove('current')
//     currentCell = newCell
//     currentCell.classList.add('current')
//     currentCellX = currentCell.getAttribute('x')
//     currentCellY = currentCell.getAttribute('y')
//   }
// }

// startButton.addEventListener('click', startThatGame)

// function startThatGame () {
//   setInterval(() => {
//     move(direction)
//   }, 200);
// }

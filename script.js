// CREATION DU PLAN

const maze = document.querySelector('.maze');
let matrix = [];

function generateMatrix() {

  for (let i=0; i <31; i++){
    matrix.push([])
    for (let j=0; j<28; j++){
      // matrix[i].push("")
      let cell = document.createElement('div');
      cell.textContent = `${i},${j}`;
      cell.classList.add("cell");
      cell.setAttribute('x', i);
      cell.setAttribute('y', j);
      matrix[i].push(cell);
      maze.append(cell)
    }
  }


}
generateMatrix()

console.log(matrix)

// createElement('div')
// setAttribute x= y=
// grid.append(div)

//maze.append(grid)

// 28x31

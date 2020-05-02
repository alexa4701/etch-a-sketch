let gridSize = 100;

drawBoard();

// Adds listeners to the squares in the grid.
const squaresDOM = document.querySelectorAll(".board-square");
squaresDOM.forEach(square => {
  square.addEventListener("mouseover", updateSquare);
});

// Creates the grid in the DOM.
function drawBoard() {
  let board = document.querySelector(".board");
  
  for(let rowNum = 0; rowNum < gridSize; rowNum++){
    // Create & append the row div
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("board-row");
    rowDiv.setAttribute("id", `row-${rowNum}`);

    // Populate the row with square divs
    for(let squareNum = 0; squareNum < gridSize; squareNum++){
      let squareDiv = document.createElement("div");
      squareDiv.classList.add("board-square");
      squareDiv.setAttribute("id", `square-${squareNum}`);
      rowDiv.appendChild(squareDiv);
    }

    // Append the row div to the board
    board.appendChild(rowDiv);
  }
}

// Fills in the target square
function updateSquare(event) {
  event.target.style.backgroundColor = "blue";  
}

let gridSize = 16;

// Draws the board in the DOM.
function drawBoard() {
    let board = document.querySelector(".board");
    
    for(let rowNum = 0; rowNum < gridSize; rowNum++){
      console.log(board);
      // Create & append the row div
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("board-row");
      rowDiv.setAttribute("id", `row-${rowNum}`);

      // Populate the row with cell divs
      for(let cellNum = 0; cellNum < gridSize; cellNum++){
        let cellDiv = document.createElement("div");
        cellDiv.classList.add("board-cell");
        cellDiv.setAttribute("id", `cell-${cellNum}`);
        rowDiv.appendChild(cellDiv);
      }

      // Append the row div to the board
      board.appendChild(rowDiv);
    }
}

drawBoard();
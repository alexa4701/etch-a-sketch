let gridSize = 16;

function drawBoard() {
  // function to draw the board (ie a grid of length x width divs)
  // 1. Select the board in DOM
  // 2. For x number of rows
  //  - create the row
  //  - create each column and append to the row
  //  - append column to the board

    let board = document.querySelector(".board");
    // Creates an array to hold each cell. Size of array = gridWidth squared
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
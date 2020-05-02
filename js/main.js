let gridSize = 16;
let drawingActive = false;
let rainbowActive = false;

const board = document.querySelector(".board");

drawBoard();
initSquares();

// Listener to toggle drawing on clicking the board
board.addEventListener("mousedown", () => {
  drawingActive = !drawingActive;
});

// Add event listener for the reset button.
const resetButtonDOM = document.querySelector("#resetButton");
resetButtonDOM.addEventListener("mousedown", reset);

// Add event listener for the rainbow button.
const rainbowButtonDOM = document.querySelector("#rainbowButton");
rainbowButtonDOM.addEventListener("mousedown", toggleRainbow);

// Creates the grid in the DOM.
function drawBoard() {
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

// Deletes all rows on the board
function clearBoard() {
  while(board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

// Toggles rainbowActive bool and active class for rainbowButton in DOM
function toggleRainbow() {
  rainbowButtonDOM.classList.toggle("active");
  rainbowActive = !rainbowActive;
}

// Fills in the target square
function updateSquare(event) {
  if(drawingActive){
    // Rainbow mode
    if(rainbowActive) {
      let red, green, blue, alpha;
      red = Math.floor(Math.random() * 256);
      green = Math.floor(Math.random() * 256);
      blue = Math.floor(Math.random() * 256);
      event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
    // Normal mode
    else {
      event.target.style.backgroundColor = "rgb(0,0,0)";
    }
  }
}

// Adds event listeners to board squares.
function initSquares() {
  let squaresDOM = document.querySelectorAll(".board-square");
  squaresDOM.forEach(square => {
    square.addEventListener("mouseover", updateSquare);
  });
}

// Prompts & validates for grid size
function getNewGridSize() {
  let input = Number(prompt("How many squares should the board have? Enter a number between 0 and 200 :D"));;
  while(input > 200 || input < 0 || isNaN(input)) {
    input = prompt("Invalid input :( Enter a number between 0 and 200");
  }
  gridSize = input;
}

// Resets everything
function reset() {
  drawingActive = false;
  rainbowActive = false;
  rainbowButtonDOM.classList.remove("active");
  clearBoard();
  getNewGridSize();
  drawBoard();
  initSquares();
}



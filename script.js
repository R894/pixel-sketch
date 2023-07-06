var board = document.querySelector(".board");
var cellCount = 64*64; 
var cellColor = "blue";
var hoverToggled = false;

for (let i = 0; i < cellCount; i++) {
  var cell = document.createElement("div");
  cell.classList.add("cell");
  board.appendChild(cell);
}

var containerWidth = board.offsetWidth;
var cellsPerRow = Math.ceil(Math.sqrt(cellCount));
var squareSize = (containerWidth / cellsPerRow);

document.querySelectorAll(".cell").forEach(function (cell) {
  cell.style.flexBasis = squareSize + "px";
  cell.style.height = squareSize + "px";
});
toggleHover();


document.getElementById("hover").addEventListener("click", toggleHover);

function cellColorHandler(){
  this.style.backgroundColor = cellColor;
}



function toggleClickAndDrag(bool){
  if(bool == true){
    document.querySelectorAll(".cell").forEach(function (cell) {
      cell.addEventListener("click", cellColorHandler);
    });
  }else{
    document.querySelectorAll(".cell").forEach(function (cell) {
      cell.removeEventListener("click", cellColorHandler);
    });
  }
}

function toggleHover(bool){
  if(!hoverToggled){
    document.querySelectorAll(".cell").forEach(function (cell) {
      cell.addEventListener("mouseover", cellColorHandler)
    });
    hoverToggled = true;
  }else{
    document.querySelectorAll(".cell").forEach(function (cell) {
      cell.removeEventListener("mouseover", cellColorHandler)
    });
    hoverToggled = false;
  }
  
}
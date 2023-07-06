var board = document.querySelector(".board");
var cellCount = 64*64; 
var cellColor = "blue";
var hoverToggled = false;
var mouseDownToggled = false;

var isMouseDown = false;

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
document.getElementById("click").addEventListener("click", toggleClick);

function cellColorHandler(){
  this.style.backgroundColor = cellColor;
}

function handleMouseDown(){
  isMouseDown = true;
}

function handleMouseUp(){
  isMouseDown = false;
}

function HandleMouseMove(e){
  if(isMouseDown && e.target.classList.contains("cell")){
    e.target.style.backgroundColor = cellColor;
  }
}




function toggleClick(){
  if(!mouseDownToggled){
    document.querySelectorAll(".cell").forEach(function (cell) {
      cell.addEventListener("mousedown", handleMouseDown);
      cell.addEventListener("mouseup", handleMouseUp);
      cell.addEventListener("mouseover", HandleMouseMove)
    });
    mouseDownToggled = true;
  }else{
    document.querySelectorAll(".cell").forEach(function (cell) {
      cell.removeEventListener("mousedown", handleMouseDown);
      cell.removeEventListener("mouseup", handleMouseUp);
      cell.removeEventListener("mouseover", HandleMouseMove)
    });
    mouseDownToggled = false;
  }
}

function toggleHover(){
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
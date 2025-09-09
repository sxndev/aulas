let squares = document.getElementsByClassName("square");
let firstSquare = squares[0];
let button = document.getElementsByClassName("btn");

button[0].addEventListener("click", function () {
  if ((firstSquare.classList.value === "square background-blue")) {

    firstSquare.classList.remove("background-blue");
    firstSquare.classList.add("background-yellow");

} else if ((firstSquare.classList.value === "square background-yellow")) {
    
    firstSquare.classList.remove("background-yellow");  
    firstSquare.classList.add("background-blue");
  }  
}); 

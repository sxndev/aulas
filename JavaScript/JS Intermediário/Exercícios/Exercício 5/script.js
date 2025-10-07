const square1 = document.getElementById("square1");
const square2 = document.getElementById("square-2");
const setaEsquerda = document.getElementById("seta-esquerda");
const setaDireita = document.getElementById("seta-direita");

let mostrando1 = true;
setaDireita.addEventListener("click", () => {
  if (mostrando1) {
    square1.style.animation = "toLeft 1s ease-in-out forwards";
    square2.style.animation = "toLeft 1s ease-in-out forwards";
    mostrando1 = false;
  } else{

  }
});

  let mostrando = 0
    function mostrarSetas(){
        if(mostrando >= 0 || mostrando == 3){
          
        }
      }
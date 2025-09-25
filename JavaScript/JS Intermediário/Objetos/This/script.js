// 'use strict' // é usado para não vazar o this do contexto global para o contexto local e tem que ficar na primeira linha do código


//  o this sempre vai estar assossiado a um contexto em um escopo, o this especifíca algo, sua tradução é "isso", é como se ele "apontasse" pra um elemento dentro do escopo que ele está

// quando o this está dentro do escopo de um objeto, ele passa a ser aquele objeto


// console.log(this)
// console.log(window)

// this.name = 'nicolas'

// function saudar() {
//     console.log('this no contexto da função ', this)
//     console.log('Olá ' + this.name ) // printava o this do contexto global ( nicolas )
// }

// saudar()

let usuario = {
    nome: 'nicolas',
    saudar: function(){
        console.log('this no contexto do método', this)

        console.log('this.nome no contexto do método', this.nome)
    }
} 

usuario.saudar()


let comida = {
    nome: 'brocolis',
    temperatura: 0,
    // cozinhar: function (){}
}

// posso adicionar uma propriedade depois que o objeto foi instanciado

comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento){
    console.log('this no contexto do objeto comida')
    comidaParaCozinhar.temperatura = temperaturaDeCozimento;
}
comida.cozinhar = function(temperaturaDeCozimento){
    this.temperatura = temperaturaDeCozimento; // forma reduzida, o this se refere ao objeto "comida"
}

console.log(comida) 

//comida.cozinhar(comida, 100)  posso reduzir e usar só o parâmetro "temperatura"

comida.cozinhar(100)

console.log(comida)  

// this pode existir no escopo global, escopo de função e no escopo de um método


// CÓDIGO DO PROFESSOR:



// "use strict";

// // THIS NO ESCOPO GLOBAL:

// console.log(this);

// // Output: Window (objeto)

// // console.log(this) é o mesmo que console.log(window), pois se trata do escopo global. Logo, console.log(window === this) retorna "true"

// // THIS NO ESCOPO LOCAL:

// let usuario = {
//   nome: "Lichtle",
//   saudacao: function () {
//     console.log("Seja bem-vinde ao palácio da guilda, " + this.nome + "!");
//   },
// };

// usuario.saudacao();

// // Output:

// /* Propriedades criadas no escopo global podem vazar para o escopo local. Por exemplo:

// this.name = "Lichtle";

// function saudar() {
//   console.log("Olá, " + this.name + "!");
// }

// saudar();

// >>> Output: "Olá, Lichtle!"

// Para que isso não aconteça, escreva 'use strict' no começo do documento

// */

// // OUTRO EXEMPLO DO THIS NO ESCOPO LOCAL:

// let comida = {
//   nome: "brócolis",
//   temperatura: 80,
// };

// comida.cozinhar = function (temperaturaDeCozimento) {
//   this.temperatura = temperaturaDeCozimento;
// };

// comida.cozinhar(100);

// console.log(comida);

// // Output: {nome: 'brócolis', temperatura: 100, cozinhar: ƒ}
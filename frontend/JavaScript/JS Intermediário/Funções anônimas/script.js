// VERSÃO ANTIGA :

// function somar(numero1, numero2){
//     return numero1 + numero2
// }

// let resultadoDaSoma = somar(12, 5) 
// console.log(resultadoDaSoma)


// função anônima:

let resultadoDaSoma = function(numero1, numero2){
    return numero1 + numero2
}

console.log(resultadoDaSoma(12, 5))

//função anônima é uma função comum, mas sem nome definido, por isso é chamada de função anônima, a forma de escrever ela é a mesma, porém ela vai estar dentro de uma variável, e para chamar essa função, vai ser usado o nome da váriavel
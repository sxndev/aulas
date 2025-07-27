// arrow functions também são funções anônimas e são escritas de forma reduzidas, servem para escrever funções anônimas de forma reduzida

// função anônima:
// let resultadoDaSoma = function(numero1, numero2){
//     return numero1 + numero2
// }


//arrow function:
// let resultadoDaSoma = (numero1, numero2) => {
//     return numero1 + numero2
// }

// para usar a arrow function, tiramos o nome "function" e após os parâmetros colocamos "=>" que simboliza uma flecha, daí vem o nome "arrow function"

// se a arrow function receber só um  parâmetro, tem como simplificar ela , exemplo abaixo

const incentivarQuester = nomeQuester => {
    console.log('Parabéns '+ nomeQuester +', você chegou ao módulo de JS intermediário!')
}

incentivarQuester('nicolas')

//acima eu só removi os parênteses 

//podemos simplificá-la ainda mais, mas só quando existe uma única linha no bloco de execução nela

 let resultadoDaSoma = (numero1, numero2) => numero1 + numero2
 
 console.log(resultadoDaSoma(12, 5))

 // acima eu usei o primeiro código usado no início da aula e retirei os parenteses, chaves e o return, deixando o código muito mais simples

 
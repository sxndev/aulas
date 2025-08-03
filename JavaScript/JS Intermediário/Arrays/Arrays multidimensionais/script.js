// array multidimensional é uma array dentra da outra, é possível ter arrays infinitas dentro de outra array


// Array bidimensaional (usado na aula de Array):

// let filmes = ['Vingadores','Mulher Maravilha']
// let descricaoFilme = ['Vingadores', 4.5, true]

// Array multidimentional, no exemplo abaixo a variável 'descricaoFilme' foi usada como um array dentro de outro array

let filmes = [
                ['Vingadores',4.5,true],
                ['Mulher Maravilha', 4.6, false, ['Gal Gadot', 25]]
             ]
// para fazer esse array aparecer no console, podemos usar a propriedade console.table(nome da array) 
//console.table(filmes)

//se caso eu quero ser mais específico e mostrar somente o nome "Vingadores" eu faço de uma forma parecida, mas com pequenos detalhes de diferença

//console.table(filmes[0][1])

// o primeiro colchete eu acessei a primeira array, que contém a descrição completa dos vingadores (equivale ao índice 0), o segundo colchete acessou a nota, que equivale ao índice 1

console.log(filmes[1][3][1])

// no console acima eu acessei a idade da gal gadot da seguinte forma:

// primeiro colhete acessou a array com os dados completos do filme da mulher maravilha

// o segundo colchete equivale a array onde está o nome e a idade da protagonista

// o terceiro array é a idade da protagonista, que é o que está printado no console 
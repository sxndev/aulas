// array é uma estrutura de dados que serve para armazear e organizar outros tipos de dados dentro dela e é organizado em forma de lista, o array tem posições e cada dado ocupa uma posição dentro do array, ele pode armazenar qualquer tipo de dado ( booleam, string, number) e também pode ter um array dentro de outro array

// para atribuir um array dentro de uma variávrel se usa colchetes: []

// todo índice de um array começa com o valor 0, 

// no exemplo abaixo, para mostrar o primeiro item do array no console eu tive que usar o valor 0 dentro do array para ele funcionar corretamente, se eu quisesse pegar o segundo filme, eu usaria o número 1

let filmes = ['Vingadores', 'Mulher Maravilha']
// se eu quiser que todos os itens do array apareçam no console, só usar o nome da variável
console.log(filmes[0])

// um array pode conter mais de um tipo de dado dentro dele, abaixo tem 3 tipos de dados (string, number e booleam)

let descricaoFilme = ['Vingadores', 4.5, true]
console.log(descricaoFilme)

// se caso eu tentar imprimir uma posição que não existe, o código não dá erro, mas a posição será undefined
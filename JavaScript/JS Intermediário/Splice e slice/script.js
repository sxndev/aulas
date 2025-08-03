// Slice significa "fatiar" ele vai tirar um pedaço o array e vai fazer uma cópia do array sem afetar a array original

// SLICE

// array.slice([inicio[,fim]])

let frutas = ['banana','maçã', 'laranja', 'uva']

//let frutasExtraídas = frutas.slice(1,3)
// acima eu pedi para o slice extraísse somente da posição 1 a 3 (ele vai até a 3 mas não inclui ela)

// no console apareceu somente a maçã e a laranja

//let frutasExtraídas = frutas.slice(1)

// como aqui eu só defini o início, ele vai começar da posição 1 e vai até o final do array

//console.log(frutasExtraídas)

// SPLICE

// splice remove o restante dos itens do array original e cria um array novo, é recomendado usar o splice para tirar um elemento do meio do array

// let frutasExtraídas = frutas.splice(começo, quantidade de itens a serem deletados)

// let frutasExtraídas = frutas.splice(1,2)
// deixou somente a maçã e a laranja no console
// console.log(frutasExtraídas)

 //console.log(frutas)

 let removeEAdicionaFrutas = frutas.splice(1, 2,'goiaba', 'abacaxi', 'pera')

 console.log(frutas)
 // acima eu adicionei mais frutas no array original

 console.log(removeEAdicionaFrutas)
 // mostra quais frutas foram removidas
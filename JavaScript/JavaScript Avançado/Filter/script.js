// Filter é uma função do JS que aceita outra função como parâmetro e essa função vai ser usada para filtrar elementos de um Array, ela funciona igual o laço de repetição "for", porém funciona de forma reduzida e é usada para filtrar elementos de um array


 let pessoas = [
     {nome: 'Roberto', idade: 33},
     {nome: 'Ricardo', idade: 33},
     {nome: 'Raphael', idade: 27}
 ]

// Forma que seria feita sem o filter:

// let pessoasCom33Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 33){
//         pessoasCom33Anos.push(pessoas[i])
//     }
// }


// o filter é uma propriedade do array, dentro dele é passado uma função que vai retornar o que será filtrado, e como parâmetro, a gente passa o nome do objeto que a gente está percorrendo para que a iteração funcione

// no exemplo abaixo, a váriavel está sendo atribuída com as pessoas que tem 33 anos de idade

let pessoasCom33Anos = pessoas.filter(function(pessoa){
    return pessoa.idade === 33
})

// podemos passar uma arrow function para deixar o código mais limpo e simplificado:

let pessoasCom33AnosDeIdade = pessoas.filter((pessoa) => pessoa.idade === 33)
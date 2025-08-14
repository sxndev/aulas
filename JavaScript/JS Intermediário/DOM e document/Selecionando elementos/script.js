//console.log(document)

// para acessaros elementos do DOM, é igual fizemos com objetos, usando o "document.objeto"
document.getElementById('paragrafo1') // pega um elemento pelo id

console.log(document)


// console.log(document) - Exibe todo o documento HTML

let p = document.getElementById("paragrafo1");

console.log(p);

// console.log(document.getElementById("paragrafo1")); - Outra forma de exibir a informação acima

let inputs = document.getElementsByClassName("tag-de-input");

console.log(inputs);

/*

>>> Para visualizar apenas o primeiro item da lista: 

console.log(inputs[0])

>>> Para pegar apenas o primeiro elemento de determinada classe/id/tag:

let inputs = document.getElementsByClassName("tag-de-input")[0];

*/

let h1 = document.getElementsByTagName("h1");

console.log(h1);

let buscarInputPorName = document.querySelectorAll("input[name='email']"); // mais específico, o valor que é passado dentro do colchete é o atributo da tag HTML

console.log(buscarInputPorName);
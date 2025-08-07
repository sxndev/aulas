// ARRAY:

let comidas = ["Cachorro quente", "Sushi", "Hambúrguer"];

// OBJETOS:

let videogame = {
  nome: "Playstation",
  valor: 3000,
};

let videogame2 = {
  nome: "Xbox",
  valor: 2500,
};

// Podemos armazenar objetos dentro de um array:

let videogames = [videogame, videogame2];

console.log(videogames);

// Para acessar o valor de determinada propriedade de um objeto armazenado no array, indicamos sua posição no array e o nome da propriedade:

console.log(videogames[1].nome);

// Output: Xbox

// Array é um conjunto de dados e pode ser usada para manipular uma lista de valores (strings, números, e também podem ter objetos dentro dela)

// O objeto pode ser usado quando eu quiser agrupar informações de itens, produtos e etc
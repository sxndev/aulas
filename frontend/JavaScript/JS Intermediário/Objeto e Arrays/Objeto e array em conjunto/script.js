let jogo1 = {
  nome: "Final Fantasy",
};

let jogo2 = {
  nome: "Fallout",
};

let videogame = {
  nome: "Xbox",
  valor: 3000,
  jogos: [jogo1, jogo2],
};

let jogo3 = {
  nome: "Fifa",
};
console.log(videogame.jogos[1].nome);

// para eu adiconar um jogo novo no array de jogos:

videogame.jogos.push(jogo3);

console.log(videogame);

// Criando o objeto diretamente na array do objeto videogame (Objeto dentro de um array):

// let videogame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [
//         {nome: 'Final Fantasy'},
//         {nome: 'Fallout'},
//         {nome: 'Fifa'}
//     ]
// }

// Objetos dentro de um array que está dentro de um objeto
let cliente = {
  nome: "Nicolas",
  ultimoPedido: {
    produto: "Xbox",
    valor: 3000,
    jogos: [{ nome: "Forza Horizon" }, { nome: "Fortnite" }, { nome: "GTA 5" }],
  },
};

console.log(cliente.ultimoPedido.jogos[0]); // acessando o primeiro jogo (Forza Horizon)

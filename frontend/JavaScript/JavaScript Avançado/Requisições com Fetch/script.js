let botao = document.getElementById("shuffle-btn");

botao.addEventListener('click', tirarUmaCartaAleatoria);

async function criarBaralho() {
  const url =
    "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  const resposta = await fetch(url); // faz uma requisição HTTP com a url passada dentro dos parenteses 
  return await resposta.json(); // lê o corpo da resposta e transofrma o arquivo JSON em um objeto JS e retorna uma promise
}

async function tirarUmaCarta(deck_id) {
  const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
  const resposta = await fetch(url);
  return await resposta.json();
}

async function tirarUmaCartaAleatoria() {
  const baralho = await criarBaralho(); // cria o baralho
  const carta = await tirarUmaCarta(baralho.deck_id);// tira uma carta dele
  const imagemCarta = carta.cards[0].image;// pega o link da imagem da carta
  document.getElementById("carta").src = imagemCarta; // coloca o link da imagem no atributo "src" e mostra a imagem da carta na tela
}

tirarUmaCartaAleatoria();

/*                                        FETCH
    o método "fetch()"" serve para fazer requisições HTTP ( POST, GET e etc ) aos servidores da web
    ele retorna uma promise que é resolvida quando o servidor responde
*/
/*                                        .json
usado no objeto de resposta retornado pelo fetch, ele lê o corpo da resposta que vem em formato JSON e converte ela em um objeto JS
*/

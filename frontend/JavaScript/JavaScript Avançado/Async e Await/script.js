let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      resolve();
      console.log("Começando o processo de ferver a água");
    } else {
      reject();
      console.log(
        "É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água"
      );
    }
  });
};

let passarCafe = (aguaFervida) => {
  return new Promise(function (resolve) {
    console.log("Passando o café");
    resolve();
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise(function (resolve) {
    console.log("Tomando o café");
    resolve();
  });
};

let lavarXicara = (cafeTomado) => {
  return new Promise(function (resolve) {
    console.log("Lavando a xícara");
    resolve();
  });
};

/* 

>>> USANDO O THEN:

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(passarCafe)
  .then(tomarCafe)
  .then(lavarXicara); 

>>> USANDO ASYNC E AWAIT:

*/

async function fazerCafe() {
  const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
  const cafePassado = await passarCafe(aguaFervida);
  const cafeTomado = await tomarCafe(cafePassado);
  const xicaraLavada = await lavarXicara(cafeTomado);
  if (xicaraLavada) console.log("Finalizado o ritual de tomar café");
}

fazerCafe();

// as palavras "async" e "await" são uma forma encurada de escrever uma promise (async) e o then (await)

// a palavra "async" deve ser colocada somente na função que será chamada, assim ele transforma ela em uma promise sem precisar escrever "new Promise(){}"

// o "await" só pode ser usado caso esteja dentro de uma promise, ele espera até que a promise seja executada para executar o código que vem depois dele

// no código acima, a função passarCafe tem como parâmetro a função aguaFervida, a função passarCafe só é executada após a função aguaFervida ( que é uma promise também) for executada 
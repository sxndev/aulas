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

let passarCafe = () => console.log("Passando o café");

let tomarCafe = () => console.log("Tomando o café");

let lavarXicara = () => console.log("Lavando a xícara");

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(passarCafe)
  .then(tomarCafe)
  .then(lavarXicara);


/*
      ele serve como callback e serve para indicar que uma função só pode ser executada caso outra função seja executada com sucesso e só posso usar ele caso a função retorne uma promise

      no código acima, a função "passarCafe" só é executada caso a função ferver água tiver sucesso, a função "tomarCafe" só é executada caso a função "passarCafe" seja executada com sucesso
*/

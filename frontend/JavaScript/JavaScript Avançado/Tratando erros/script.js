let chaleiraEstaNoFogao = "string";
let fogaoEstaLigado = false;

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (typeof chaleiraEstaNoFogao != "boolean") {
      throw "Somente o tipo booleano é aceito";
    }

    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log("Começando o processo de ferver a água");
      resolve();
    } else {
      const mensagemDeErro =
        "É necessário colocar a chaleira com água em cima do fogão ligado, senão seu cafezinho não ficará pronto nunca! :c";
      reject(mensagemDeErro);
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

async function fazerCafe() {
  try {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
    const cafePassado = await passarCafe(aguaFervida);
    const cafeTomado = await tomarCafe(cafePassado);
    const xicaraLavada = await lavarXicara(cafeTomado);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finalizado o ritual de tomar café");
  }
}

fazerCafe();

/*
    o "try" tem que ser usado antes das chamadas, serve para testar tudo o que está dentro do bloco dele
    se der algum problema, o try pega esse erro e envia pro catch, que deve estar logo após o fechamento de chaves

    o "catch" deve receber 1 parâmetro para tratar o erro, pode ser (e), (err), (error) ou (erro), abre e fecha chaves e coloca o código que será executado com os erros que ele receber, o catch serve para tratar os erros que o try manda

    o "finally" é uma função que será executada no final do try e catch 

    o throw serve para "jogar" um erro pro catch pegar, no código acima foi usado a palavra "tipeof" para testar e garantir que o parâmetro que for passado para a variável "chaleiraEstaNoFogao" seja do tipo booleano
*/
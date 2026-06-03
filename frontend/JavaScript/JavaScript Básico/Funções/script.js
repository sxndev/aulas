/*
  sintaxe de uma função:

  function nomeDaFunção() {
        <bloco de código>
 }
    nomeDaFunção()
 */

 /* function nomeDaFunção(parâmetro1, parâmetro2) {
 }
    nomeDaFunção(parâmetro1, parâmetro2)
 */

     function incentivarQuester() {
         alert('você chegou ao js')
     }

    incentivarQuester()


    function soma(numero1, numero2){
        console.log(numero1 + numero2)
    }

soma(3,4)


function incentivarQuester(nomeQuester = "Quester") {
  alert("Muito bem, " + nomeQuester + ", você chegou ao JS. Continue assim!");
} // Chamada da função para incentivar o usuário

incentivarQuester();

function soma(num1, num2) {
  return num1 + num2; // retorna o resultado da soma
}

let resultadoDaSoma = soma(5, 5); // chama a função e armazena o resultado na variável

console.log(resultadoDaSoma); // exibe o resultado da soma

resultadoDaSoma = soma(resultadoDaSoma, 5); // chama a função novamente com o resultado anterior e um novo valor

console.log(resultadoDaSoma); // exibe o novo resultado da soma

// uma função é um escopo que vai executar o código que for escrito dentro dela, abaixo tá a explicação detalhada de uma função


  function somar(numero1, numero2){
    return numero1 - numero2
  }

  // acima tem uma função com o nome "somar", é bom que a função tenha o nome do que ela faz, e não é bom ter uma função que execute várias coisas de um vez só

  // entre parenteses existe os parâmetros (numero1, numero2), esses parâmetros podem ser mudados depois e usados na função, as funções também podem não ter nenhum parâmetro, quando a função for invocada, os parâmetros devem ser definidos, se não forem definidos a função não vai funcionar, os parametros podem receber números, strings e booleans

  // o return é usado para retornar alguma coisa da função, no exemplo acima, ele está retornando o numero1 sendo subtraído pelo numero2

  // e depois para usarmos a função, devemos chamar ela e passar parâmetros se ela tiver, exemplo abaixo

  somar(5, 7)
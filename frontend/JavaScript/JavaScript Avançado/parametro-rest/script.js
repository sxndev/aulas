/*
 o parâmetro rest serve para receber um numero indefinido de argumentos, ele é representado por 3 pontos (...) seguido do nome do parâmetro, ele deve ser o ultimo parametro da função, ele é utilizado como um array, ou seja, ele recebe os argumentos em forma de array, e podemos acessar os elementos do array normalmente, ele é muito útil quando não sabemos quantos argumentos a função vai receber, ou quando queremos receber um numero indefinido de argumentos.
 */

 
 function incentivarQuester(mensagem, ...nomesQuester){
    nomesQuester.map(nomeQuester => console.log(`${mensagem}, ${nomeQuester}`))
    // console.log(`${mensagem}, ${nomesQuester}`)
 }


 incentivarQuester('parabéns por ter chegado ao modulo de Javascript avançado',  'Nicolas', 'Pedro', 'João', 'André')      
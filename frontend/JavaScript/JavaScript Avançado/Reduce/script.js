let ordens = [
    {cliente:'Roberto',tipo:'compra', quantidade: 56, ativo: 'NFLX34'},
    {cliente:'Ricardo',tipo:'compra', quantidade: 76, ativo: 'AAPL34'},
    {cliente:'Raphael',tipo:'venda', quantidade: 21, ativo: 'GOGL34'},
] 

// let quantidadeDeOrdes = 0

// for(let i = 0; i < ordens.length; i++){
//     quantidadeDeOrdes += ordens[i].quantidade
// } 

let quantidadeDeOrdens = ordens.reduce(function(quantidadeDeOrdens, ordem){
    return quantidadeDeOrdens + ordem.quantidade
}, 0)

// o primeiro parametrô serve para definir a variável que vai receber a soma a cada iteração do array (quantidadeDeOrdens)
// o segundo parametro serve para indicar o item que vai receber essa iteração

// o 0 encima serve para definir qual será o valor inicial da função do reduce

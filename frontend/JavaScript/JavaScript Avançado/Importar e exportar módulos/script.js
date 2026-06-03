/*
    módulos são arquivos JavaScript que a gente pode exportar e importar depois em outros pontos expecíficos do nosso JavaScript que a gente vai precisar usar

    a palavra chave "export" serve para indicar que aquele trecho de código que estou criando pode ser importado em outro arquivo js

    a palavra "import" serve para pegar um trecho de código que tenha a palavra "export" antes dele, e a palavra-chave "from" serve para dizer onde esse trecho de código está, e devo colocar o caminho até o arquivo entre aspas simples
*/
import {somar} from './operacoes-matematicas.js' // estou indicando que tô pegando uma função do arquivo "operacoes-matematicas.js ( a palavra ."js" pode ser omitida )"

console.log(somar(1, 3))

/* 
    se caso eu precisasse exportar mais de um trecho de código, no arquivo onde vai o "export" eu escreveria no final do arquivo assim:

    export {funcao1, funcao2}

    e na importação eu escreveria:

    import {funcao1, funcao2} from 'caminho-ate-o-arquivo'
*/

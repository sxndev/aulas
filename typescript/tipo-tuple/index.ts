/*
Tuples, ou Tuplas como chamamos em português não é um conceito novo na programação

Um tipo de Tuple é outro tipo de tipo Array mas a diferença é que ele sabe exatamente quantos elementos esse array contêm e exatamente quais tipos de dados ele contêm em posições específicas.*/

// no exemplo abaixo criamos uma Tuple que contém dois elementos, o primeiro é uma string e o segundo um número
const stringNumber : [string, number ] = ['nicolas', 16] 

// um exemplo de tupla, é o useState do React que retorna um array com dois elementos, o primeiro é o estado atual e o segundo é uma função para atualizar esse estado, e o RGB, que é uma tupla que contém três números representando as cores vermelho, verde e azul.
const rgb: [number, number, number] = [255, 0, 0]

// também podemos criar tuplas com elementos opcionais, para usar elementos opcionais em uma tupla, basta adicionar um ponto de interrogação (?) após o tipo do elemento que queremos tornar opcional. 

let colorRgba : [number, number,number, number?] = [255, 0, 0 ]
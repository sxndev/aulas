// o generic serve para criar componentes reutilizaveis em funções, classes, interfaces e etc, no código abaixo estamos criando uma função que recebe um item de qualquer tipo e retorna um array desse item, tornando ela muito reutilizável

//para usar o generic, usamos o símbolo <T> antes dos parâmetros da função, e depois usamos o T como tipo do parâmetro e do retorno da função

function makeArray<T>(item : T ) : T[]{
    return [item];
}

const numbers = makeArray(10) // array de números
const names = makeArray('nicolas') // array de strings
// o union types é uma forma de permitir que uma variável ou parâmetro aceite mais de um tipo de dado

function printClientId(id : number | string){
    console.log(`O id do print é ${id}`)
}

// na função acima, o parâmetro id pode ser tanto um number quanto uma string

printClientId(123)
printClientId("456")

// para fazer essa união com o union type, usamos o pipe (|) entre os tipos que queremos unir
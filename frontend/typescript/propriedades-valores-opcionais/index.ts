// para criar um parâmetro ou propriedade opcional em TypeScript, usamos o símbolo "?" após o nome do parâmetro ou propriedade.

type Customer = {
    firstName : string,
    lastName?  : string,
    age : number
}

// aqui um novo usuário é criado sem a propriedade opcional "lastName" e nenhum erro apareceu

const newCustomer : Customer = {
    firstName : "João",
    age : 30
}

// estamos passando um parâmetro opcional quando usamos o "?" no parâmetro "lastName"
function printName(firstName : string, lastName?: string){
    console.log(`O primeiro nome é ${firstName}`)
    console.log(`O último nome é ${lastName}`)
}


// para criar um tipo de objeto em TypeScript, usamos a palavra reservada "type" seguida do nome do tipo e das propriedades do objeto entre chaves.

// a criação de um objeto em TypeScript é diferente de JavaScript, pois precisamos definir o tipo do objeto.

type Customer = {
    name: string,
    age: number,
}

function showCustomerInfo(customer: Customer){
    console.log(`O nome do cliente é: ${customer.name}`)
    console.log(`A idade do cliente é: ${customer.age}`)
}
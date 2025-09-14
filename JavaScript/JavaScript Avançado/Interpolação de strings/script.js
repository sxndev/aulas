// const imprimirInformacoesPessoa = (primeiroNome,ultimoNome, idade) => {
//     return "Primeiro nome: " + primeiroNome + " Ultimo nome: " + ultimoNome + ". idade: " + idade;
// }

const imprimirInformacoesPessoa = (primeiroNome,ultimoNome, idade) => {
    return `Primeiro Nome: ${primeiroNome}, Ultimo Nome: ${ultimoNome}, Idade: ${idade}`
}

 console.log(`${imprimirInformacoesPessoa("Nicolas", "Silva", 16)}, ele é um DevQuester`)

 // Para fazer concatenação de strings com variáveis basta usar o acento grave para usar strings e para concatenar é só usar o ${} e colocar o elemento dentro das chaves
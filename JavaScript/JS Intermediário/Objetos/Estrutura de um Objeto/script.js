// Objetos são uma forma de organizar várias informações em um lugar só, e usam {} para serem criados


//      ESTRUTURA DE UM OBJETO
let tenis = {
    //chave: valor,
    cor: 'branco',
    tamanho: 42,
    emEstoque: true
}

console.log(tenis)

//para acessar propriedades de um objeto é só usar um (.) do lado do nome do objeto e colocar o nome da propriedade
console.log(tenis.cor)

console.log(tenis['emEstoque']) // outra forma de acessar uma propriedade


tenis.valor = "R$200" // adicionei outra propriedade no objeto

console.log(tenis)

// quando a gente chama o map em um array a gente transforma um array em um outro array totalmente novo com os valores alterados, o tamanho da array original continua o mesmo, a array antiga não muda, mas a nova é criada a partr do conteúdo da primeira


let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Raphael', idade: 27}
]

//  aqui eu to criando um novo array somente com o nome das pessoas

// let nomeDasPessoas = []
// for(let i = 0; i < pessoas.length; i++){
//     nome.push(pessoas[i].nome) 
// }

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem "  + pessoa.idade + " anos de idade")

 console.log(nomeDasPessoas)

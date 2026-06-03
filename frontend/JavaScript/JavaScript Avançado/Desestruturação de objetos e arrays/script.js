let pessoa = {nome:"Nicolas", sobrenome: "Silva", idade: 16 }

// Essa era forma comum de fazer a desestruturação
// let nome = pessoa.nome
// let idade = pessoa.idade

// usando a desestruturação para desestruturar um objeto:

// na declaração de uma variável que vai desestruturar um objeto, devemos usar as chaves {} e dentro delas passamos as variáveis que irão mapear o objeto e atribuímos elas com a propriedade do objeto que será desestruturada 

// palavras com letrinhas laranja se referem ao nome da propriedade, já as brancas são as variáveis

// let { nome: nome, idade: idade } = pessoa

//na declaração da variável acima, tem duas váriaveis, (nome: e idade:) e estamos atribuindo elas com as propriedades "nome" e "idade" do objeto pessoa, e atribuímos essa variável com o objeto que será desestruturado ( pessoa )

// forma reduzida:

let {nome, idade, sobrenome} = pessoa
// Aqui ele declara a variável a atribui ela com a propriedade que tem o mesmo nome quea variável


const numeros = [1, 2, 3];

const [um, dois ,tres] = numeros
 
// aqui as variáveis estão sendo atribuídas de acordo com os índices do array  
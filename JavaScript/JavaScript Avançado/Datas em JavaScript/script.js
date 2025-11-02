// utilizamos o objeto Date para manipular e trabalhar com datas

// se utilizar new Date, é possível ver a data atual

const dataAtual = new Date();
console.log(dataAtual)

// para obter informações específicas:

const dia = dataAtual.getDate(); // pega o dia
const mes = dataAtual.getMonth() + 1; // pega o mês 
const ano = dataAtual.getFullYear(); // pega o ano

// como o mês não vem em texto, vem como inteiro, precisamos adicionar o +1 pois ele começa com 0

console.log(dia)
console.log(mes)
console.log(ano)

// se precisarmos trabalhar com datas no futuro ou no passado podemor adicionar ou subtrair dias de uma data existente
dataAtual.setDate(dataAtual.getDate() + 7) // procurando qual dia vai ser daqui 7 dias 

// calculando a diferença em milissegundos:
const dataDeNascimento = new Date('1990-05-15')
const diferencaEmMilissegundos = dataAtual - dataDeNascimento // retorna u número "bizarro" pois quando calculamos duas datas, o resultado vem em milissegundos

// convertendo a data para anos:
const idade = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
// o Math.floor arredona o número

// formatando datas de forma mais simples:

const dataFormatada = dataAtual.toLocaleDateString('pt-BR')
// pega a data e formata ela para o formato brasileiro pois a data vem em formato americano

// a API intl.DateTimeFormat proporciona uma maneira mais avançada de trabalhar com datas, levando em consideração não só o idioma, mas também outras preferências do usuário

const formato = new Intl.DateTimeFormat('pt-BR', {weekday: 'long', years:'numeric', months:'long', day: 'numeric'});
const dataFormatoDaIntl = formato.format(dataAtual)
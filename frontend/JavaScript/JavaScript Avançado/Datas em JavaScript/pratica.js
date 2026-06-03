const dataAtual = new Date(); // peguei a data atual
const umDiaDepois = new Date(dataAtual); // recebe a data atual como parâmetro

umDiaDepois.setDate(dataAtual.getDate() + 1) // pega a data atual e adiciona +1 dia, resultando no dia seguinte

const umMesAtras = new Date(dataAtual)
umMesAtras.setMonth(umMesAtras.getMonth() - 1)

const opcoes = {
    year: 'numeric',
    month: 'long', // posso mudar as opções para aparecer como número (numeric) ou texto (long)
    day: 'numeric',
}

const dataFormatada1 = dataAtual.toLocaleDateString('pt-BR', opcoes)
// estou pegando a data pela API e pegando as informações de acordo com o objeto "opcoes" 

// outro jeito de mostrar as datas:
const opcoes2 = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
const formatador = new Intl.DateTimeFormat('pt-BR', opcoes)
const dataFormatada = formatador.format(dataAtual)

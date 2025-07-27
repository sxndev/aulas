/*
    ESTRUTURA DO SWITCH

    switch(parâmetro){
    case valor1:
        <bloco de declaração>
        break
    case valor2:
        <bloco de declaração>
        break
    }
*/

    let nomeFilme = 'Vingadores'

    switch(nomeFilme){
        case 'Vingadores':
            console.log('é o filme dos Vingadores')
            break
        case 'Batman vs Superman':
            console.log('é o filme do Batman vs Superman')
            break // se o valor for true, ele sai do fluxo
    default:// equivale ao else
        console.log('é outro filme')
    }
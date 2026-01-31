export default function reducer(state = [], action ) {
    if(action.type === 'ADD_TO_CART') {
        return [ ...state, action.payload ]
    }

    return state
}

// o reducer é uma função que recebe como parâmetro o estado inicial da aplicação (state) e uma ação (action). a action é um objeto que tem 2 propriedades, o type que é o tipo da ação e o payload que é o valor que a ação carrega. o reducer deve retornar um novo estado com base na ação recebida.
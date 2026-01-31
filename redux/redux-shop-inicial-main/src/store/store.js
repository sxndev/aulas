import {createStore, combineReducers} from 'redux'
import cartReducer from './reducers/cart.js'

const rootReducer = combineReducers({
    cartProducts: cartReducer,
})
const store = createStore(rootReducer)

export default store

// nesse código um reducer foi criado, ele é uma função que recebe o estado inicial da aplicação e uma ação, e retorna um novo estado com base na ação recebida. Em seguida, o reducer foi combinado com outros reducers (caso existam) usando a função combineReducers do Redux, e a store foi criada usando a função createStore do Redux, passando o rootReducer como parâmetro. A store é o local onde o estado da aplicação é armazenado. para usar o createStore, precisa passar um reducer como parâmetro.
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart';


const store = configureStore({  
    reducer: {
        cartProducts: cartReducer,
  },
});

export default store

// no código acima usamos o configureStore do redux toolkit para criar a store da aplicação, 
// passando um objeto de configuração onde definimos o reducer principal da aplicação.
// Nesse caso, estamos importando o cartReducer do arquivo './reducers/cart' e 
// atribuindo-o à chave 'cartProducts' no objeto reducer. 
// Finalmente, exportamos a store criada para ser usada em outras partes da aplicação.

// o cartReducer é o componente que vai gerenciar o estado do carrinho de compras na aplicação.
export function addProductsToCart(product) {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

// essa é a função vai ser usada para criar uma action que adiciona um produto ao carrinho. a action retorna um objeto que tem 2 propriedades, o type que é o tipo da ação e o payload que é o valor que a ação carrega. nesse caso, o payload é o produto que será adicionado ao carrinho.